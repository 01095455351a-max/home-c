// 네이버 로그인 콜백 — 자필 후기 원본 열람용.
// 네이버에서 인증 후 이 주소로 돌아오면 코드를 토큰으로 교환하고,
// 우리 자체 서명 세션 토큰을 쿠키로 발급한 뒤 원래 보던 페이지로 돌려보낸다.
// 네이버 개발자센터 애플리케이션의 "Callback URL"에 <배포주소>/api/naver-callback 을 등록해야 함.
import { issueSessionToken, getCookie } from "../_lib/session.js";

function htmlResponse(body, status = 200) {
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = getCookie(request, "naver_oauth_state");
  const returnTo = getCookie(request, "naver_return_to") || "/reviews/#handwritten";

  if (!code || !state || state !== cookieState) {
    return htmlResponse("<p>로그인 요청이 올바르지 않습니다. 다시 시도해 주세요.</p>", 400);
  }

  if (!env.NAVER_CLIENT_ID || !env.NAVER_CLIENT_SECRET || !env.SESSION_SECRET) {
    return htmlResponse(
      "<p>네이버 로그인 설정이 아직 완료되지 않았습니다. Cloudflare Pages 환경변수(NAVER_CLIENT_ID / NAVER_CLIENT_SECRET / SESSION_SECRET)를 확인해 주세요.</p>",
      500
    );
  }

  const tokenUrl = new URL("https://nid.naver.com/oauth2.0/token");
  tokenUrl.searchParams.set("grant_type", "authorization_code");
  tokenUrl.searchParams.set("client_id", env.NAVER_CLIENT_ID);
  tokenUrl.searchParams.set("client_secret", env.NAVER_CLIENT_SECRET);
  tokenUrl.searchParams.set("code", code);
  tokenUrl.searchParams.set("state", state);

  const tokenRes = await fetch(tokenUrl.toString());
  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return htmlResponse(
      `<p>네이버 인증에 실패했습니다: ${(tokenData.error_description || "알 수 없는 오류").replace(/</g, "&lt;")}</p>`,
      400
    );
  }

  // 토큰이 실제로 유효한지 확인하는 용도로만 프로필을 조회하고, 개인정보는 저장하지 않음
  const profileRes = await fetch("https://openapi.naver.com/v1/nid/me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  const profileData = await profileRes.json();
  if (profileData.resultcode !== "00") {
    return htmlResponse("<p>네이버 로그인 확인에 실패했습니다. 다시 시도해 주세요.</p>", 400);
  }

  const sessionToken = await issueSessionToken(env.SESSION_SECRET);
  const maxAge = 30 * 24 * 60 * 60; // 30일

  const headers = new Headers({ Location: returnTo });
  // 실제 인가에 쓰이는 서명 토큰 — JS에서 읽을 수 없어야 함
  headers.append("Set-Cookie", `naver_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`);
  // 화면에 "원본 보기" 버튼 대신 원본을 바로 시도해볼지 판단하는 용도의 UI 힌트 — 이것만으로는 인가되지 않음
  headers.append("Set-Cookie", `reviews_unlocked=1; Path=/; Secure; SameSite=Lax; Max-Age=${maxAge}`);
  headers.append("Set-Cookie", "naver_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
  headers.append("Set-Cookie", "naver_return_to=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");

  return new Response(null, { status: 302, headers });
}
