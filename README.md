# 해아림한의원 잠실점 홈페이지

Hugo + [Hugo Blox](https://hugoblox.com) `saas-landing-page` 템플릿으로 제작된 정적 홈페이지입니다.
콘텐츠는 [plan.md](plan.md)의 인터뷰 자료를 기반으로 구성했습니다.

## 로컬에서 실행하기

이 프로젝트는 Hugo(Extended), Go, Node.js가 필요합니다. 이미 아래 경로에 설치되어 있습니다.

- Hugo: `%LOCALAPPDATA%\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe`
- Go: `C:\Program Files\Go\bin`
- Node.js: `%USERPROFILE%\tools\node-v24.19.0-win-x64` (portable, 관리자 권한 설치 불필요)

`run-hugo-server.bat`을 더블클릭하면 위 경로들을 PATH에 등록하고 `http://localhost:1314` 에서 개발 서버가 실행됩니다.

수동으로 실행하려면:

```bash
npm install       # 최초 1회 (Tailwind CSS, preact 등)
hugo server --disableFastRender --port 1314
```

배포용 정적 파일을 만들려면:

```bash
hugo --minify
```

`public/` 폴더에 결과물이 생성됩니다.

## 콘텐츠 구조

- `content/_index.md` — 메인 페이지의 모든 섹션(히어로, 신뢰 배지, 원장 소개, 중점 클리닉, 진료 프로세스, 오시는 길, 진료시간, 건강 칼럼, FAQ, 예약 CTA)
- `content/blog/` — 건강 칼럼 및 원내 공지
- `data/authors/` — 원장 프로필 (석선희, 류석균)
- `config/_default/` — 사이트 설정(진료시간, 주소, SEO, 메뉴 등)

## 반영이 필요한 항목 (실제 운영 전 확인)

- [ ] 전화번호(`02-xxx-xxxx`)를 실제 번호로 교체 — `config/_default/params.yaml`의 `seo.location.phone`, `content/_index.md`의 contact-info/cta-card 섹션
- [ ] 지도 좌표(`config/_default/params.yaml`, `content/_index.md`의 map 블록) — 잠실새내역 인근 근사치이므로 정확한 좌표로 보정
- [ ] 네이버 예약 / 카카오톡 채널 실제 링크 연결 (`content/_index.md`의 `url: "#"` 부분들)
- [ ] 원장 프로필 사진 및 병원 내부 사진 (`data/authors/*.yaml`의 `avatar`, `focus-areas` 블록의 `image` 등)
- [ ] `config/_default/hugo.yaml`의 `baseURL`을 실제 도메인으로 교체
- [ ] `content/privacy.md`, `content/terms.md`를 실제 법적 문서로 교체
