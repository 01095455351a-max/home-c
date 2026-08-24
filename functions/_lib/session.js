// 자필 후기 원본 열람용 세션 토큰 서명/검증 헬퍼.
// 별도 DB/KV 없이, "만료시각.서명" 형태의 HMAC-SHA256 서명 토큰을 쿠키에 담아
// naver-callback.js가 발급하고 api/reviews/[key].js가 검증한다.
// env.SESSION_SECRET(Cloudflare Pages 환경변수)가 없으면 항상 실패 처리.

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((str.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

// 30일짜리 세션 토큰 발급
export async function issueSessionToken(secret) {
  const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const payload = String(expires);
  const key = await hmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return `${payload}.${toBase64Url(signature)}`;
}

// 토큰이 유효한지(서명 일치 + 미만료) 확인
export async function verifySessionToken(token, secret) {
  if (!token || !secret) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  try {
    const key = await hmacKey(secret);
    return await crypto.subtle.verify("HMAC", key, fromBase64Url(sig), new TextEncoder().encode(payload));
  } catch {
    return false;
  }
}

export function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}
