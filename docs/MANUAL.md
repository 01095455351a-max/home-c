# 제작 매뉴얼 — 해아림한의원 잠실점 홈페이지

> 이 문서는 작업이 진행될 때마다 함께 업데이트됩니다. 최신 상태를 반영하지 못한 부분이 있다면 알려주세요.

## 1. 개요

- **기술 스택**: [Hugo](https://gohugo.io) (정적 사이트 생성기, Extended 버전) + [Hugo Blox](https://hugoblox.com) 테마 (`saas-landing-page` 템플릿 기반)
- **콘텐츠 형식**: Markdown (`.md`) + YAML 프론트매터, Hugo Blox의 블록(block) 시스템으로 섹션 구성
- **스타일**: Tailwind CSS v4 (Hugo 내장 `css.TailwindCSS` 기능으로 빌드, Node.js 없이도 CSS 자체는 처리되지만 preact 기반 인터랙티브 블록 번들링에는 Node.js 필요)
- **폼**: Web3Forms (전화 상담 신청 — 이메일로 접수 알림 발송, 별도 백엔드 없음)
- **배포 대상**: Cloudflare Pages (`home-c-e67.pages.dev`, GitHub `main` 브랜치 푸시 시 자동 재빌드)
- **저장소**: https://github.com/01095455351a-max/home-c

## 2. 로컬 개발 환경

### 2.1 필요한 도구 (이미 이 컴퓨터에 설치되어 있음)

| 도구 | 설치 경로 | 비고 |
|---|---|---|
| Hugo (Extended) | `%LOCALAPPDATA%\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe` | winget으로 설치 |
| Go | `C:\Program Files\Go\bin` | Hugo Modules(테마 의존성) 다운로드에 필요 |
| Node.js | `%USERPROFILE%\tools\node-v24.19.0-win-x64` | 포터블 버전, 관리자 권한 설치 불필요. Tailwind/JS 블록 번들링에 필요 |

### 2.2 로컬 서버 실행

가장 간단한 방법 — 프로젝트 루트의 배치 파일 더블클릭 또는 실행:

```bash
run-hugo-server.bat
```

`http://localhost:1314` 에서 미리보기가 열립니다 (PATH 설정 + `hugo server` 실행을 자동으로 처리).

수동으로 실행하려면:

```bash
npm install       # 최초 1회
hugo server --disableFastRender --port 1314
```

### 2.3 프로덕션 빌드

```bash
npm run build
```

`hugo --minify` 실행 후 Pagefind 검색 인덱스까지 생성합니다. 결과물은 `public/` 폴더에 생성됩니다 (`.gitignore`에 포함되어 있어 Git에는 올라가지 않음 — Cloudflare Pages가 빌드 시 직접 생성).

## 3. 폴더 구조

```
content/                   # 모든 페이지 콘텐츠 (Markdown)
  _index.md                 # 홈
  about/                     # 한의원 소개
    promise.md                잠실점의 약속
    doctors/                  의료진 소개 (+ 원장 이야기 2편)
    hours.md                  진료시간
    location.md                오시는 길 (지도)
    notice/                   공지사항 게시판
    telemedicine.md            비대면진료
  diseases/                  특화 질환 9종 상세페이지 + 목록
  guide/                      진료안내
    first-visit.md              첫 내원시
    treatments/                 치료방법 8종 상세페이지 + 목록
  reviews/_index.md          치료후기 (네이버 리뷰 링크 + 자필후기 블러 카드)
  faq/_index.md               자주 묻는 질문
  blog/                        원장 컬럼 (건강 칼럼)
  press/_index.md             언론보도
  videos/_index.md            영상자료 (준비중)
  pricing/_index.md           비급여안내
  privacy.md, terms.md         법적 고지

config/_default/             사이트 설정
  hugo.yaml                    Hugo 기본 설정
  params.yaml                   사이트 정보, 색상 테마, clinic.* (전화/SNS 링크 등)
  menus.yaml                    상단 드롭다운 메뉴 / 하단 푸터 메뉴 구조
  languages.yaml                언어 설정 (한국어)

layouts/_partials/hooks/      사이트 전역에 자동 삽입되는 커스텀 영역
  body-end/quick-menu.html      우측 플로팅 퀵메뉴 (전화/예약/SNS)
  footer-start/common-bottom.html  모든 페이지 공통 하단(상담폼/진료시간/오시는길)

data/authors/                 원장 프로필 데이터 (석선희, 류석균)
assets/media/reviews/         자필 후기 블러 이미지 (카테고리별 폴더)
scripts/blur-review-image.ps1 자필 후기 이미지 블러 처리 스크립트
docs/                          이 매뉴얼 + 문제 보고서
```

## 4. 자주 하는 작업

### 4.1 연락처 / SNS 링크 수정

`config/_default/params.yaml` 상단의 `clinic:` 블록만 수정하면 전체 사이트(플로팅 퀵메뉴, 공통 하단, CTA 버튼 등)에 자동 반영됩니다.

```yaml
clinic:
  phone_display: "02-6954-7575"
  phone_tel: "tel:02-6954-7575"
  naver_booking_url: "..."
  kakao_channel_url: "..."
  naver_blog_url: "..."
  instagram_url: "..."
  youtube_url: "..."
  web3forms_access_key: "..."   # 상담 신청 폼 접수 이메일 발송용 (4.1.1 참고)
  kakao_map_js_key: "..."       # 오시는 길 지도용 (4.5 참고)
```

### 4.1.1 상담 신청 폼 접수 이메일 연결 (Web3Forms)

상담 신청 폼은 [web3forms.com](https://web3forms.com)에서 이메일만으로 무료 발급받는 Access Key로 동작합니다. **키가 비어있으면 폼 제출 화면은 정상적으로 뜨지만 실제로는 아무 데도 접수되지 않으니, 배포 전 반드시 등록할 것.**

1. web3forms.com 접속 → 접수받을 이메일 주소 입력 → Access Key 발급 (회원가입 불필요, 이메일로 즉시 발급)
2. 발급받은 Access Key를 `params.yaml`의 `clinic.web3forms_access_key`에 붙여넣기
3. 재배포 후 폼을 실제로 한 번 제출해 이메일이 도착하는지 확인

### 4.2 새 공지사항 추가

`content/about/notice/` 폴더에 새 `.md` 파일 생성. 기존 파일(`2026-hours-update.md`)을 복사해서 `title`, `date`, `tags: [공지]`만 맞추면 자동으로 공지사항 게시판과 홈 화면 미리보기에 나타납니다. (⚠️ `date`는 항상 과거 날짜로 — Hugo는 미래 날짜 콘텐츠를 기본적으로 빌드에서 제외합니다. [문제 보고서 §1](ISSUES.md#1-hugo가-미래-날짜-콘텐츠를-조용히-빌드에서-제외함) 참고)

### 4.3 새 원장 컬럼 작성

`content/column/`에 새 `.md` 파일 생성 (URL은 `/column/파일명/`), `tags:`에 `칼럼`을 반드시 포함해야 홈 화면 미리보기에 함께 노출됩니다. `type: blog`로 지정해야 BlogPosting 구조화 데이터(JSON-LD)가 자동으로 생성됩니다 (2026-08부터 URL을 `/blog/`에서 `/column/`으로 변경, 원고 내용에 맞는 영문 슬러그를 파일명으로 사용).

**대표 이미지는 넣지 않아도 됩니다.** `tags:`에 넣은 질환명(공황장애/불안장애/강박증/우울증/불면증/틱장애/ADHD/자율신경실조증/다한증/신경성 관련 태그)을 보고 `column-grid` 블록이 자동으로 해당 진료분야의 색 띠 + 아이콘을 카드 헤더에 채워줍니다(카테고리 매핑은 `layouts/_partials/hbx/blocks/column-grid/block.html`의 `$categories` 참고). 특정 사진을 꼭 쓰고 싶은 글에만 예외적으로 `image: {filename: ...}`을 지정하면 사진이 우선합니다.

### 4.4 새 자필 후기 추가

(2026-08 리팩터링: 후기 1건 = `content/reviews/` 안의 파일 1개. `content/reviews/_index.md`는 더 이상 후기 목록을 직접 담지 않고, `review-grid` 블록이 이 폴더를 자동으로 읽어 카드로 렌더링합니다.)

1. 원본 이미지(스캔본)를 임의의 폴더에 준비
2. 아래 스크립트로 블러 처리 (원본은 절대 그대로 웹에 올리지 않음):
   ```powershell
   powershell -File scripts\blur-review-image.ps1 -InputPath "원본.jpg" -OutputPath "assets\media\reviews\카테고리\reviewN.jpg"
   ```
3. `content/reviews/` 폴더에 새 `.md` 파일 생성 (기존 파일 하나를 복사해서 값만 바꾸는 게 가장 빠름). 예:
   ```yaml
   ---
   title: "손발 다한증"          # 카드 제목 (증상 중심, "~개월 치료"/"보호자 후기" 등은 넣지 않음)
   description: "치료 전: ... **치료 후**: ..."
   image: "reviews/카테고리/reviewN.jpg"   # 위에서 블러 처리한 파일 경로
   topics: ["다한증"]            # 질환/증상 + (확인된 경우) 치료방법 태그, 최대 3개까지 카드에 노출
   type: review-item
   weight: 175                  # 정렬 순서. 기존 항목들 weight를 참고해 원하는 위치의 숫자로 지정
   build:
     render: false               # 이 후기만의 개별 페이지는 만들지 않고 목록에만 사용
     list: always
   ---
   ```
4. `hugo server`로 미리보기 확인 후 커밋

삭제할 때는 해당 `.md` 파일만 지우면 됩니다.

### 4.4.1 새 언론보도 기사 추가

`content/press/` 폴더에 새 `.md` 파일 생성 (기존 `press-01.md` 등을 복사). 저작권 보호를 위해 기사 전문이 아닌 요약만 싣고, 원문은 `external_url`로 링크합니다.

```yaml
---
title: "기사 제목"
description: "원장명 · 날짜 — 요약 (2~3문장)"
icon: "hero/newspaper"          # 또는 hero/academic-cap
image: "press/infographics/파일명.svg"   # 없으면 생략 가능 (아이콘으로 대체됨)
gradient: "from-primary-400 to-secondary-400"
external_url: "https://원문주소"
topics: ["공황장애", "불안장애"]
type: press-item
weight: 210                     # 기존 항목들보다 큰 숫자를 쓰면 맨 뒤에 추가됨
build:
  render: false
  list: always
---
```

### 4.4.2 새 영상 추가

`content/videos/` 폴더에 새 `.md` 파일 생성. 유튜브 영상은 임베드로, 방송 출연 등 유튜브가 아닌 영상은 외부 링크 카드로 표시됩니다.

```yaml
---
title: "영상 제목"
description: "간단한 설명 (선택)"
youtube_id: "dQw4w9WgXcQ"        # 유튜브 URL의 watch?v= 뒷부분. 유튜브 영상이면 이것만 채우면 임베드됨
# external_url: "https://..."    # 유튜브가 아닌 경우에만 이걸 대신 사용
weight: 10
type: video-item
build:
  render: false
  list: always
---
```

### 4.5 지도 위치 변경 / 다른 지도 서비스로 교체

`content/_index.md`, `content/about/location.md`의 `block: clinic-map` 항목에서 `lat`/`lng`/`directions_url`을 수정하면 됩니다.

`clinic-map` 블록은 `design.layout`으로 두 가지 배치를 지원합니다: `split`(기본, 주소·지도 좌우 분할) / `stacked`(지도를 상단에 크게 보여주고 주소·전화·길찾기를 그 아래 카드에 배치 — 지도를 더 넓고 시원하게 보여주고 싶을 때, `content/about/location.md`에서 사용 중). `content.phone`을 지정하면 주소 옆에 전화 아이콘+번호도 함께 노출됩니다.

지도는 카카오맵(JS SDK)을 기본으로 쓰며, `params.yaml`의 `clinic.kakao_map_js_key`가 비어있으면 API 키가 필요 없는 Google 지도 임베드로 자동 대체됩니다. 카카오맵 키를 새로 발급/교체하려면:

1. [카카오 디벨로퍼스](https://developers.kakao.com) → 내 애플리케이션 → 앱 생성 → **앱 키**에서 **JavaScript 키** 확인
2. **플랫폼 → Web**에 실제 배포 도메인(`home-c-e67.pages.dev` 등) 등록
3. 좌측 메뉴 **카카오맵 → 활성화 설정**에서 **상태를 ON**으로 변경 (이 단계를 빼먹으면 키가 있어도 지도가 안 뜸 — [문제 보고서 §1.7](ISSUES.md#17-지도-서비스--osm--google--kakao-순으로-교체) 참고)
4. 발급받은 JavaScript 키를 `clinic.kakao_map_js_key`에 등록

(참고: 네이버 지도는 2025년 3월부터 API 신규 이용 신청이 유료로 전환되어 사용하지 않기로 함.)

**진료시간과 오시는 길은 별도 페이지가 아니라 `content/about/location.md` 한 페이지("진료시간 & 오시는 길")에 통합되어 있습니다.** 이전에 있던 `content/about/hours.md`는 삭제되었고, `/about/hours/`로 들어오는 옛 링크는 `aliases`로 `/about/location/`에 자동 리다이렉트됩니다. `config/_default/menus.yaml`의 `한의원 소개` 드롭다운에도 "진료시간"/"오시는 길" 두 항목이 아닌 "진료시간 & 오시는 길" 한 항목만 존재합니다 — 새로 분리하지 말 것.

### 4.6 새 특화 질환 / 치료방법 페이지 추가

`content/diseases/` 또는 `content/guide/treatments/` 안의 기존 `.md` 파일을 복사해 구조(hero → markdown → cta-card)를 그대로 사용하고 내용만 교체합니다. 만든 뒤 `config/_default/menus.yaml`의 해당 드롭다운에 메뉴 항목을 추가해야 상단 메뉴에 나타납니다.

### 4.7 색상 테마 변경

`config/_default/params.yaml`의 `hugoblox.theme.colors.primary` / `secondary` (hex 코드) 수정. 로고의 "잠실점" 텍스트 색상(`#2AA6AA`)을 기준으로, 채도를 낮추고 밝기를 올린 `#3FAFB3`(primary) / `#257D80`(secondary)로 조정해 사용 중입니다. 색상 하나만 바꾸면 `from-primary-*`/`from-secondary-*` 클래스를 쓰는 모든 페이지에 자동 반영되지만, `content/_index.md` 홈 히어로처럼 `rgba(...)` 값을 직접 하드코딩한 곳은 별도로 맞춰줘야 합니다.

### 4.8 폰트 변경

`config/_default/params.yaml`의 `hugoblox.typography.pack`에 `data/fonts/*.yaml` 파일명(확장자 제외)을 지정합니다. 현재 `pretendard`(한글 최적화 가변 폰트, `assets/dist/font/Pretendard.var.woff2`로 자체 호스팅) 사용 중 — Hugo Blox 기본 제공 폰트 팩(Inter, Montserrat 등)은 전부 한글 글리프가 없어 한글은 시스템 기본 폰트로 대체되므로 주의. 새 폰트로 바꾸려면:
1. 한글을 지원하는 폰트의 가변(variable) woff2 파일을 `assets/dist/font/<폰트이름>.var.woff2`로 저장 (파일명이 `.var.`를 포함해야 가변 폰트로 인식됨)
2. `data/fonts/<이름>.yaml`에 `pretendard.yaml`과 같은 형식으로 `families.heading`/`families.body`를 그 폰트 이름으로 지정
3. `params.yaml`의 `typography.pack`을 그 이름으로 변경

### 4.9 관리자 화면(`/admin`) 설정 — 새 게시판 콘텐츠 추가

코드로 직접 파일을 만들지 않고, 웹 화면에서 원장님/직원이 직접 공지사항·원장 컬럼·자필 후기·언론보도·영상을 추가/삭제할 수 있도록 [Decap CMS](https://decapcms.org)를 붙여뒀습니다 (`static/admin/index.html`, `static/admin/config.yml`, `functions/api/auth.js`, `functions/api/callback.js`). 로그인은 GitHub 계정으로 합니다.

**아직 안 되어 있는 설정 (사장님이 직접 해주셔야 하는 부분)** — 이 3가지가 끝나야 실제로 로그인이 됩니다:

1. **GitHub OAuth App 등록**
   - GitHub 로그인 → 우측 상단 프로필 → **Settings → Developer settings → OAuth Apps → New OAuth App**
   - Application name: 아무거나 (예: 해아림한의원 관리자)
   - Homepage URL: `https://home-c-e67.pages.dev`
   - Authorization callback URL: `https://home-c-e67.pages.dev/api/callback`
   - 생성 후 **Client ID**를 복사, **Generate a new client secret**으로 **Client Secret**도 복사 (이 화면을 벗어나면 secret은 다시 볼 수 없으니 바로 복사)

2. **Cloudflare Pages 환경변수 등록**
   - Cloudflare Pages 대시보드 → 이 프로젝트 → **Settings → Environment variables**
   - `GITHUB_CLIENT_ID` = 위에서 복사한 Client ID
   - `GITHUB_CLIENT_SECRET` = 위에서 복사한 Client Secret
   - 저장 후 재배포 필요 (다음 커밋 푸시 시 자동으로 반영됨)

3. **저장소 협업자 추가** (로그인을 허용할 두 분의 GitHub 계정)
   - GitHub 저장소(`01095455351a-max/home-c`) → **Settings → Collaborators and teams → Add people**
   - 원장님, 직원분 GitHub 아이디를 각각 초대 (초대 수락 이메일 확인 필요)
   - 이 저장소에 쓰기 권한이 있는 GitHub 계정만 `/admin`에 로그인해 발행할 수 있습니다

**사용 방법**: `https://home-c-e67.pages.dev/admin/` 접속 → "GitHub 로 로그인" → 목록에서 원하는 게시판(공지사항/원장 컬럼/자필 후기/언론보도/영상) 선택 → 새 항목 작성 후 **발행(Publish)**. 발행하면 자동으로 GitHub에 커밋되고 Cloudflare Pages가 재배포하며, 보통 1~2분 안에 실제 사이트에 반영됩니다. 삭제도 기존 항목을 열어 삭제 버튼을 누르면 됩니다.

⚠️ 로컬 `hugo server`에서는 `/admin`이 열리긴 하지만 로그인은 되지 않습니다 (Cloudflare Pages Functions는 로컬 Hugo 서버에서 실행되지 않음) — 반드시 실제 배포 주소에서 확인해야 합니다. 위 3가지 설정 후에도 로그인이 안 되면 [문제 보고서 §2](ISSUES.md#2-대기-중인-항목-실제-배포운영-전-확인-필요)를 참고해 다시 확인해 주세요.

### 4.10 한의원 둘러보기(원내 사진 슬라이드) 사진 추가/변경

홈 화면 히어로 바로 아래 "해아림한의원 잠실점 둘러보기" 섹션은 `clinic-gallery` 커스텀 블록(`layouts/_partials/hbx/blocks/clinic-gallery/block.html`)으로, 가로로 스와이프/스크롤하며 넘겨보는 사진 캐러셀입니다 (`credential-slider` 블록과 동일한 CSS scroll-snap 방식, 별도 JS 라이브러리 없음).

1. 새 사진을 `assets/media/clinic/`에 추가
2. `content/_index.md`의 `block: clinic-gallery` 항목 `content.items`에 아래 형식으로 추가:
   ```yaml
   - image: clinic/파일명.jpg
     caption: 짧은 설명 (예: 치료실)
   ```
3. 순서를 바꾸려면 `items` 배열 순서를 바꾸면 됩니다. 캡션 없이 사진만 넣으려면 `caption`을 생략하면 됩니다.

## 5. 배포 (Cloudflare Pages)

실제 배포는 Cloudflare Pages(`home-c-e67.pages.dev`)로 되어 있으며, GitHub `main` 브랜치에 푸시하면 자동으로 재빌드됩니다. Cloudflare Pages 대시보드(pages.cloudflare.com)에서 빌드 명령(`npm install && hugo --gc --minify && npx pagefind --site public`)과 출력 디렉터리(`public`)를 확인할 수 있습니다.

상담 신청 폼은 Web3Forms로 동작하므로 별도의 "Forms" 대시보드는 없고, 접수 시 `clinic.web3forms_access_key`를 발급받은 이메일 주소로 바로 알림이 옵니다 (§4.1.1 참고).

`netlify.toml`은 과거 Netlify 배포를 염두에 두고 만든 설정 파일로, 현재는 사용되지 않지만 추후 Netlify로 옮길 경우를 대비해 남겨두었습니다.

## 6. 참고 문서

- [문제 보고서 (docs/ISSUES.md)](ISSUES.md) — 해결된 이슈, 알려진 제약, 미해결 항목
- [plan.md](../plan.md) — 최초 콘텐츠 기획안
- [README.md](../README.md) — 프로젝트 최상위 안내
