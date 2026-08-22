# 제작 매뉴얼 — 해아림한의원 잠실점 홈페이지

> 이 문서는 작업이 진행될 때마다 함께 업데이트됩니다. 최신 상태를 반영하지 못한 부분이 있다면 알려주세요.

## 1. 개요

- **기술 스택**: [Hugo](https://gohugo.io) (정적 사이트 생성기, Extended 버전) + [Hugo Blox](https://hugoblox.com) 테마 (`saas-landing-page` 템플릿 기반)
- **콘텐츠 형식**: Markdown (`.md`) + YAML 프론트매터, Hugo Blox의 블록(block) 시스템으로 섹션 구성
- **스타일**: Tailwind CSS v4 (Hugo 내장 `css.TailwindCSS` 기능으로 빌드, Node.js 없이도 CSS 자체는 처리되지만 preact 기반 인터랙티브 블록 번들링에는 Node.js 필요)
- **폼**: Netlify Forms (온라인 상담 신청)
- **배포 대상**: Netlify (GitHub 저장소와 연동)
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

`hugo --minify` 실행 후 Pagefind 검색 인덱스까지 생성합니다. 결과물은 `public/` 폴더에 생성됩니다 (`.gitignore`에 포함되어 있어 Git에는 올라가지 않음 — Netlify가 빌드 시 직접 생성).

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
  phone_tel: "tel:0507-1469-7578"
  naver_booking_url: "..."
  kakao_channel_url: "..."
  naver_blog_url: "..."
  instagram_url: "..."
  youtube_url: "..."
```

### 4.2 새 공지사항 추가

`content/about/notice/` 폴더에 새 `.md` 파일 생성. 기존 파일(`2026-hours-update.md`)을 복사해서 `title`, `date`, `tags: [공지]`만 맞추면 자동으로 공지사항 게시판과 홈 화면 미리보기에 나타납니다. (⚠️ `date`는 항상 과거 날짜로 — Hugo는 미래 날짜 콘텐츠를 기본적으로 빌드에서 제외합니다. [문제 보고서 §1](ISSUES.md#1-hugo가-미래-날짜-콘텐츠를-조용히-빌드에서-제외함) 참고)

### 4.3 새 원장 컬럼 작성

`content/blog/`에 새 `.md` 파일 생성, `tags:`에 `칼럼`을 반드시 포함해야 홈 화면 미리보기에 함께 노출됩니다.

### 4.4 새 자필 후기 추가

1. 원본 이미지(스캔본)를 임의의 폴더에 준비
2. 아래 스크립트로 블러 처리 (원본은 절대 그대로 웹에 올리지 않음):
   ```powershell
   powershell -File scripts\blur-review-image.ps1 -InputPath "원본.jpg" -OutputPath "assets\media\reviews\카테고리\reviewN.jpg"
   ```
3. `content/reviews/_index.md`의 해당 카테고리 `focus-areas` 블록에 카드(이미지 경로 + 요약 텍스트) 추가

### 4.5 지도 위치 변경 / 다른 지도 서비스로 교체

`content/_index.md`, `content/about/location.md`의 `block: google-map` 항목에서 `lat`/`lng`/`directions_url`을 수정하면 됩니다. 지금은 API 키가 필요 없는 Google 지도 임베드(`layouts/_partials/hbx/blocks/google-map/block.html`)를 쓰고 있으며, 네이버 지도로 바꾸려면 네이버클라우드플랫폼에서 Maps API 키를 발급받아 전달해 주세요.

### 4.6 새 특화 질환 / 치료방법 페이지 추가

`content/diseases/` 또는 `content/guide/treatments/` 안의 기존 `.md` 파일을 복사해 구조(hero → markdown → cta-card)를 그대로 사용하고 내용만 교체합니다. 만든 뒤 `config/_default/menus.yaml`의 해당 드롭다운에 메뉴 항목을 추가해야 상단 메뉴에 나타납니다.

### 4.7 색상 테마 변경

`config/_default/params.yaml`의 `hugoblox.theme.colors.primary` / `secondary` (hex 코드) 수정. 원래 아임웹 사이트(healimjs1.imweb.me)의 브랜드 컬러(`#1998bf`)에서, 정신건강 클리닉에 맞게 채도를 낮추고 밝기를 올린 `#3aa5c6`(primary) / `#2c7a94`(secondary)로 조정해 사용 중입니다. 색상 하나만 바꾸면 `from-primary-*`/`from-secondary-*` 클래스를 쓰는 모든 페이지에 자동 반영되지만, `content/_index.md` 홈 히어로처럼 `rgba(...)` 값을 직접 하드코딩한 곳은 별도로 맞춰줘야 합니다.

### 4.8 폰트 변경

`config/_default/params.yaml`의 `hugoblox.typography.pack`에 `data/fonts/*.yaml` 파일명(확장자 제외)을 지정합니다. 현재 `pretendard`(한글 최적화 가변 폰트, `assets/dist/font/Pretendard.var.woff2`로 자체 호스팅) 사용 중 — Hugo Blox 기본 제공 폰트 팩(Inter, Montserrat 등)은 전부 한글 글리프가 없어 한글은 시스템 기본 폰트로 대체되므로 주의. 새 폰트로 바꾸려면:
1. 한글을 지원하는 폰트의 가변(variable) woff2 파일을 `assets/dist/font/<폰트이름>.var.woff2`로 저장 (파일명이 `.var.`를 포함해야 가변 폰트로 인식됨)
2. `data/fonts/<이름>.yaml`에 `pretendard.yaml`과 같은 형식으로 `families.heading`/`families.body`를 그 폰트 이름으로 지정
3. `params.yaml`의 `typography.pack`을 그 이름으로 변경

## 5. 배포 (Netlify)

1. [app.netlify.com](https://app.netlify.com) → GitHub 로그인
2. "Add new site" → "Import an existing project" → GitHub → `01095455351a-max/home-c` 선택
3. 빌드 설정은 `netlify.toml`에 이미 정의되어 있어 자동 인식됨 → "Deploy site"
4. 배포 후 상담 신청 폼(Netlify Forms)이 자동으로 활성화됨 — Netlify 대시보드의 "Forms" 메뉴에서 접수 내역 확인 가능

## 6. 참고 문서

- [문제 보고서 (docs/ISSUES.md)](ISSUES.md) — 해결된 이슈, 알려진 제약, 미해결 항목
- [plan.md](../plan.md) — 최초 콘텐츠 기획안
- [README.md](../README.md) — 프로젝트 최상위 안내
