// Decap CMS용 GitHub OAuth 시작점.
// /admin 에서 "GitHub으로 로그인"을 누르면 Decap CMS가 이 엔드포인트를 새 창으로 연다.
// 필요한 환경변수(Cloudflare Pages > Settings > Environment variables):
//   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET (GitHub OAuth App에서 발급)
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);

  if (!env.GITHUB_CLIENT_ID) {
    return new Response("GITHUB_CLIENT_ID가 설정되지 않았습니다. Cloudflare Pages 환경변수를 확인해 주세요.", { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/api/callback`;

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      "Set-Cookie": `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
