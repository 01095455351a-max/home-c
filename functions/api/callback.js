// GitHub OAuth 콜백. GitHub에서 인증 후 이 주소로 돌아오면
// 코드를 access token으로 교환하고, Decap CMS가 이해하는 postMessage 프로토콜로
// 부모 창(admin 페이지)에 토큰을 전달한다.
function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = getCookie(request, "oauth_state");

  if (!code || !state || state !== cookieState) {
    return htmlResponse("<p>로그인 요청이 올바르지 않습니다. /admin 에서 다시 시도해 주세요.</p>", 400);
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return htmlResponse(
      `<p>GitHub 인증에 실패했습니다: ${(tokenData.error_description || "알 수 없는 오류").replace(/</g, "&lt;")}</p>`,
      400
    );
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });

  const html = `<!doctype html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:${payload.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}',
      e.origin
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
로그인 완료. 이 창은 자동으로 닫힙니다.
</body></html>`;

  return htmlResponse(html);
}
