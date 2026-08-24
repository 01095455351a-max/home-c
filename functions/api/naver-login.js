// 네이버 로그인 시작점 — 자필 후기 원본 열람용.
// "네이버 로그인 후 원본 보기" 버튼이 이 엔드포인트로 이동시킨다.
// 필요한 환경변수(Cloudflare Pages > Settings > Environment variables):
//   NAVER_CLIENT_ID, NAVER_CLIENT_SECRET (네이버 개발자센터 애플리케이션에서 발급)
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);

  if (!env.NAVER_CLIENT_ID) {
    return new Response("NAVER_CLIENT_ID가 설정되지 않았습니다. Cloudflare Pages 환경변수를 확인해 주세요.", { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/api/naver-callback`;

  // 로그인 후 되돌아갈 페이지 (기본: 자필 후기 섹션)
  const returnTo = url.searchParams.get("return") || "/reviews/#handwritten";

  const authorizeUrl = new URL("https://nid.naver.com/oauth2.0/authorize");
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", env.NAVER_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  headers.append("Set-Cookie", `naver_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  headers.append(
    "Set-Cookie",
    `naver_return_to=${encodeURIComponent(returnTo)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );

  return new Response(null, { status: 302, headers });
}
