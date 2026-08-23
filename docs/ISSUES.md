# 문제 보고서 — 해아림한의원 잠실점 홈페이지

> 이 문서는 작업이 진행될 때마다 함께 업데이트됩니다. 해결된 이슈는 "해결됨"에, 남은 작업은 "대기 중"에 기록합니다.

## 1. 해결된 이슈

### 1.1 Hugo가 미래 날짜 콘텐츠를 조용히 빌드에서 제외함
- **증상**: `content/diseases/*.md` 등 새로 만든 페이지가 `hugo list all`에는 보이지만 실제 빌드(`hugo build`)에는 나타나지 않음. 에러 메시지도 없음.
- **원인**: 자정 무렵 작업하면서 콘텐츠 `date:`를 당일(예: `2026-08-22`)로 설정했는데, 서버 시각과 타임존 처리 차이로 Hugo가 이를 "미래 날짜"로 판단해 기본 설정(`buildFuture: false`)에 따라 조용히 제외함.
- **해결**: 해당 날짜를 전날(`2026-08-21`)로 일괄 수정. **앞으로 새 콘텐츠를 만들 때는 `date:`를 항상 확실히 지난 날짜로 설정할 것.**

### 1.2 공지사항 게시판이 사이트 전체 페이지를 다 보여줌
- **증상**: `content/about/notice/_index.md`에서 `content-collection` 블록에 `filters.tags: [공지]`를 지정했는데, 공지 2건이 아니라 사이트의 모든 페이지(30여 개)가 나열됨.
- **원인**: Hugo의 태그 매칭(`site.GetPage "tags/공지"`)이 이 프로젝트에서만 실패 — 정확한 근본 원인은 특정되지 않았으나(같은 태그 필터가 홈 화면에서는 정상 동작), 한글 태그 처리와 관련된 것으로 추정.
- **해결**: 태그 필터 대신 프론트매터 `type: notice-post` + `page_type: notice-post` 필터로 변경 (필드 값 단순 비교라 안정적). 홈 화면의 "원장 컬럼" 미리보기(2026-08 이전 명칭: "건강 칼럼 & 원내 소식")는 태그 필터(`칼럼`, `공지`)를 그대로 사용 중이며 정상 동작 확인됨.
- **주의**: 다른 곳에서도 새로 게시판을 만들 때 태그 기반 필터가 이상 동작하면, `page_type` 방식으로 전환할 것.

### 1.3 `tel:` 전화 링크가 `#ZgotmplZ`로 깨짐
- **증상**: 플로팅 퀵메뉴의 전화 걸기 버튼 링크가 `href="#ZgotmplZ"`로 렌더링되어 클릭해도 아무 동작 안 함.
- **원인**: Go 템플릿의 HTML 자동이스케이프가 `tel:` 스킴을 안전하지 않은 URL로 판단해 방어적으로 무효화함.
- **해결**: `{{ $c.phone_tel | safeURL }}`로 명시적으로 안전 처리.

### 1.4 Hugo Blox 색상 브랜드가 원래 아임웹 사이트와 다름
- **증상**: 처음에는 임의로 teal/indigo 색상을 사용했는데, 기존 아임웹 사이트(healimjs1.imweb.me)의 실제 브랜드 컬러가 아니었음.
- **해결**: 아임웹 사이트를 방문해 실제 사용 색상(`#1998bf` 계열 청록색)을 추출, `params.yaml`의 `hugoblox.theme.colors.primary/secondary`를 hex 값으로 교체. 콘텐츠 파일 전체에 하드코딩되어 있던 `from-teal-*`/`from-indigo-*` Tailwind 클래스도 `from-primary-*`/`from-secondary-*` 시맨틱 토큰으로 일괄 치환해, 이후 색상 변경 시 `params.yaml` 한 곳만 고치면 전체 반영되도록 함.

### 1.5 Netlify 빌드 설정이 pnpm 기준이었음
- **증상**: 템플릿의 `netlify.toml`이 `pnpm`을 쓰도록 되어 있었는데, 실제로는 `npm install`로 로컬 개발 환경을 구성함 (`pnpm-lock.yaml` 없음).
- **해결**: `netlify.toml`, `package.json`을 npm 기준으로 정리.

### 1.6 기본 제공 폰트 팩이 전부 한글 미지원
- **증상**: `typography.pack: "geometric"` (Montserrat/Poppins) 등 Hugo Blox 기본 폰트 팩은 전부 Google Fonts의 라틴 전용 폰트라 한글 글리프가 없음 — 한글 텍스트는 눈에 띄지 않게 시스템 기본 폰트(맑은 고딕 등)로 자동 대체되고 있었음.
- **해결**: Pretendard 가변 폰트를 자체 호스팅(`assets/dist/font/Pretendard.var.woff2`)하는 `data/fonts/pretendard.yaml` 팩 추가. [제작 매뉴얼 §4.8](MANUAL.md#48-폰트-변경) 참고.

### 1.7 지도 서비스 — OSM → Google → Kakao 순으로 교체
- **증상**: 기본 제공 `map` 블록(MapLibre + OpenFreeMap)은 API 키가 필요 없어 편리하지만, 한국 지도 데이터(OSM)는 도로/상호 정보가 부실해 실제 위치 확인용으로는 부적합.
- **경과**: ① 우선 API 키 없이 쓸 수 있는 Google Maps iframe 임베드로 교체(`google-map` 블록 신설). ② 네이버 지도로 바꾸려 네이버클라우드플랫폼에서 Maps API를 알아봤으나, 2025년 3월부터 지도 API 신규 이용 신청이 차단되고 무료 이용량 제공이 중단되어(유료 전환) 포기. ③ 카카오맵 JavaScript SDK로 최종 교체 — 개발자 계정당 첫 앱은 월 300만 건 무료로, 소규모 홈페이지 트래픽에는 사실상 무료. 블록을 `google-map` → `clinic-map`으로 이름 변경하고, `site.Params.clinic.kakao_map_js_key`가 비어있으면 Google 지도로 자동 대체되도록 이중 안전장치를 둠.
- **주의**: 카카오맵은 JavaScript 키 발급만으로는 부족하고, 카카오 디벨로퍼스 콘솔에서 **내 애플리케이션 → 카카오맵 → 활성화 설정 → 상태 ON**을 별도로 켜야 실제로 지도가 표시됨(`OPEN_MAP_AND_LOCAL service` 403 오류로 확인 가능).

### 1.8 마크다운 이미지가 `assets/media/`가 아닌 `static/`에 있으면 반응형 최적화가 안 됨
- **증상**: `block: markdown` 콘텐츠 안에 `![]()`로 넣은 이미지가 `WARN render-image: could not resolve local image` 경고와 함께, 최적화(webp 변환·반응형 srcset) 없이 원본 그대로 노출됨.
- **원인**: 이 테마의 마크다운 이미지 렌더 훅(`render-image.html`)은 페이지 번들 리소스와 `assets/media/` 경로만 찾고, `static/`은 검사하지 않음(다만 최종 폴백으로 원본 경로를 그대로 `<img src>`에 넣어주기 때문에 화면에 아예 안 뜨는 것은 아님).
- **해결**: 원장 프로필 사진 등은 `static/images/`가 아닌 `assets/media/`에 두고 마크다운에서 `![](파일명.jpg)`처럼 상대경로로 참조.

### 1.9 Netlify Forms가 실제 배포 환경(Cloudflare Pages)에서는 동작하지 않음
- **증상**: 상담 신청 폼에 `data-netlify="true"`를 썼지만, 실제 배포는 Cloudflare Pages(`home-c-e67.pages.dev`)로 되어 있어 제출해도 접수 데이터가 어디에도 저장/전송되지 않고 사라짐(화면상 "접수되었습니다" 페이지는 뜨지만 실제 접수 안 됨). Netlify Forms는 Netlify에 호스팅된 사이트에서만 동작하는 Netlify 전용 기능.
- **해결**: Web3Forms(https://web3forms.com, 이메일만으로 무료 Access Key 발급)로 교체. `site.Params.clinic.web3forms_access_key`가 비어있으면 폼은 뜨지만 실제 접수는 안 되니 배포 전 반드시 키를 등록할 것.
- **참고**: 이 과정에서 상담 폼 자체도 "온라인 상담 신청"(이름/연락처/분야/증상 설명)에서 "전화 상담 신청"(이름/연락처만 필수, 나머지는 선택)으로 단순화함 — 어차피 전화로 다시 확인하는 구조라 항목을 줄임.

### 1.10 한글 텍스트가 단어 중간에서 줄바꿈됨 (예: "세밀하게" → "세밀하"/"게")
- **증상**: 화면 폭이 좁아져 텍스트가 줄바꿈될 때, 띄어쓰기가 아닌 음절 중간에서 끊기는 경우가 여러 곳에서 발생.
- **원인**: 기본 CSS `word-break: normal` 상태에서는 브라우저가 한글(CJK)을 공백 없는 문자 스트림으로 취급해 아무 음절에서나 줄을 바꿈.
- **해결**: `layouts/_partials/hooks/head-end/korean-typography.html`에서 `body { word-break: keep-all; overflow-wrap: break-word; }`를 전역 적용. 개별 문구에 `<br>`을 넣는 방식보다 화면 폭이 바뀌어도 항상 띄어쓰기 단위로 자연스럽게 재정렬됨.

### 1.11 홈 화면 "원장 컬럼" 미리보기가 컬럼 목록 페이지와 다르게 세로 1열로 보임
- **증상**: `/column/` 목록 페이지는 3열 카드 그리드로 잘 나오는데, 홈 화면 하단의 "원장 컬럼" 미리보기 섹션(`content-collection` 블록, `id: news`)은 카드 1개가 한 줄을 다 차지하는 세로 나열로 보임.
- **원인**: `/column/` 페이지는 자체 제작한 `column-grid` 커스텀 블록을 쓰지만, 홈 화면 미리보기는 Hugo Blox 기본 `content-collection` 블록을 그대로 썼고 `design.view: card`의 기본 컨테이너 폭이 `max-w-[65ch]`(가독성 위주 1열)로 고정되어 있어 컬럼 개수와 무관하게 항상 1열로 렌더링됨.
- **해결**: `design.view`를 `card`에서 `article-grid`로, `design.columns: 3`을 추가. `article-grid` 뷰도 카드 자체는 `card.html`을 그대로 재사용하므로 시각적 디자인은 동일하고 배치만 그리드로 바뀜.
- **주의**: `content-collection` 블록으로 카드 목록을 새로 만들 때는 기본값(`view: card`)이 아니라 `view: article-grid` + `design.columns`를 명시해야 여러 열로 보임.

### 1.12 의료진 소개 카드를 눌러도 깨진 `/authors/` 프로필로 연결됨
- **증상**: 홈 화면 "원장 및 진료 철학 소개"(`team-showcase` 블록)에서 원장 사진/이름을 클릭하면 `/authors/<slug>/`로 이동하는데, 이 경로는 [§2](#2-대기-중인-항목-실제-배포운영-전-확인-필요)에 있던 것처럼 실제로 빌드되지 않는 페이지(404)임. 정작 원장의 실제 자기소개(스토리)는 `/about/doctors/`(의료진 소개 페이지)의 `doctor-profile` 블록 안에 이미 존재함.
- **해결**: `team-showcase` 블록을 프로젝트에 오버라이드(`layouts/_partials/hbx/blocks/team-showcase/block.html`)해, 카드 링크를 슬러그별로 `/about/doctors/#seok-seonhui`, `/about/doctors/#ryu-seokgyun`로 매핑(그 외 슬러그는 기존 `/authors/<slug>/`로 폴백). `content/about/doctors/_index.md`의 두 `doctor-profile` 섹션에 `id: seok-seonhui` / `id: ryu-seokgyun` 앵커를 추가해 짚어갈 수 있게 함.
- **참고**: `/authors/` 자체의 404는 여전히 미해결이며(원장 컬럼 게시글 작성자 표시 등 다른 곳에서도 같은 링크를 사용), 별도로 추적 중(백그라운드 작업 task_7fdbae16).

## 2. 대기 중인 항목 (실제 배포/운영 전 확인 필요)

| 항목 | 위치 | 상태 |
|---|---|---|
| 석선희 원장 이야기 원고 | `content/about/doctors/_index.md` (두 번째 `doctor-profile` 블록의 `story` 필드) | 류석균 원장 스토리(개인 서사 중심, 실제 원고 반영됨)에 비해 분량이 짧고 진료 철학 요약 위주. 원고 전달 시 교체 예정 |
| 개인정보처리방침 위탁업체명 | `content/privacy.md` §6 | "㈜아임웹"으로 기재되어 있으나 실제 배포 환경(Cloudflare Pages)에 맞게 확인 필요 |
| 개인정보처리방침 공고일자/시행일자 | `content/privacy.md` §10 | `[게시 예정일 기재]` placeholder |
| 비급여 항목 실제 가격 | `content/pricing/_index.md` | 사장님 요청으로 전 항목 50만원으로 임시 통일. 실제 금액 확정 시 항목별로 교체 필요 |
| 언론보도 기사 1건 | `content/press/_index.md` 하단 목록 | `edu.donga.com` 자동 조회가 차단되어 수동 확인 필요 |
| Web3Forms Access Key 등록 | `config/_default/params.yaml`의 `clinic.web3forms_access_key` | 비어있으면 상담 신청 폼이 실제로 접수되지 않음. web3forms.com에서 이메일로 발급 후 등록 필요 |
| 카카오맵 실제 렌더링 라이브 확인 | `content/_index.md`, `content/about/location.md`의 `block: clinic-map` | JS 키 등록 + 카카오맵 활성화까지 완료, SDK 응답도 정상 확인했으나 로컬 미리보기 도구의 네트워크 제약으로 시각적 확인은 실제 배포 주소에서 재확인 필요 |
| 네이버 로그인 후 원본 후기 열람 기능 | 자필 후기 (`content/reviews/`) | 공개 범위(로그인 회원에게 원본 공개)는 사장님 확인 완료. 아직 필요한 것: (1) 원본(블러 처리 전) 이미지 재전송, (2) 네이버 개발자센터 OAuth 앱 등록(Client ID/Secret, 사장님 직접) — 준비되면 진행 |
| 관리자 화면(Decap CMS, `/admin`) 실제 로그인 미검증 | `static/admin/`, `functions/api/auth.js`, `functions/api/callback.js` | 코드는 작성 완료, `hugo server`(로컬)는 Cloudflare Pages Functions를 실행하지 않아 로그인까지 로컬 검증 불가. 실 배포 후 아래가 준비되면 테스트 필요: (1) GitHub OAuth App 등록, (2) Cloudflare Pages 환경변수 `GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET` 등록, (3) 원장님·직원 GitHub 계정을 저장소 협업자로 추가. 절차는 [MANUAL.md §4.9](MANUAL.md#49-관리자-화면admin-설정--새-게시판-콘텐츠-추가) 참고 |

## 3. 알려진 제약사항

- 정적 사이트(Hugo)이므로 서버 사이드 인증/회원 시스템이 없음. 상담 신청은 Web3Forms로 이메일만 수신하며, 접수 데이터를 저장/조회하는 자체 DB는 없음.
- 실제 배포 환경은 Cloudflare Pages(`home-c-e67.pages.dev`)이며, GitHub `main` 브랜치 푸시 시 자동 재빌드됨. `netlify.toml`은 향후 Netlify로 옮길 경우를 대비해 남겨두었으나 현재는 사용되지 않음.
