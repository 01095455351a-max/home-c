// 자필 후기 원본(블러 처리 전) 이미지 서빙.
// /api/reviews/<경로> 로 요청이 오면, 로그인 세션이 유효할 때만
// Cloudflare R2 버킷에서 원본 이미지를 읽어 응답한다. 세션이 없으면 401.
//
// 필요한 사전 준비(Cloudflare Pages 대시보드에서 원장님이 직접 설정):
//   1. R2 버킷 생성 후 원본 이미지를 콘텐츠의 image: 필드와 동일한 경로로 업로드
//      (예: content/reviews/panic-disorder.md의 image: "reviews/mental-health/review1.jpg"
//       → R2 오브젝트 키: "mental-health/review1.jpg" — "reviews/" 접두사는 뺀다)
//   2. Pages 프로젝트 Settings → Functions → R2 bucket bindings 에서
//      변수 이름 REVIEWS_ORIGINALS 로 위 버킷을 연결
//   3. 환경변수 SESSION_SECRET 등록 (naver-callback.js와 동일한 값)
// 자세한 절차는 docs/MANUAL.md 참고.
import { verifySessionToken, getCookie } from "../../_lib/session.js";

const CONTENT_TYPES = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

export async function onRequestGet({ request, env, params }) {
  const sessionToken = getCookie(request, "naver_session");
  const isAuthorized = await verifySessionToken(sessionToken, env.SESSION_SECRET);

  if (!isAuthorized) {
    return new Response("로그인이 필요합니다.", { status: 401 });
  }

  if (!env.REVIEWS_ORIGINALS) {
    return new Response(
      "원본 이미지 저장소(R2)가 아직 연결되지 않았습니다. Cloudflare Pages 설정을 확인해 주세요.",
      { status: 500 }
    );
  }

  const segments = Array.isArray(params.path) ? params.path : [params.path].filter(Boolean);
  const key = segments.join("/");
  if (!key) {
    return new Response("Not found", { status: 404 });
  }

  const object = await env.REVIEWS_ORIGINALS.get(key);
  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  const ext = key.split(".").pop().toLowerCase();
  const headers = new Headers();
  headers.set("Content-Type", CONTENT_TYPES[ext] || "application/octet-stream");
  // 개인정보가 담긴 원본이므로 캐시되지 않도록
  headers.set("Cache-Control", "private, no-store");

  return new Response(object.body, { headers });
}
