---
title: '홈'
date: 2026-08-21
type: landing

sections:
  # ──────────────────────────────────────────────────────────
  # 1. 홈 (메인) — Hero
  # ──────────────────────────────────────────────────────────
  - block: hero
    id: top
    content:
      eyebrow: 해아림한의원 잠실점
      title: 마음의 불안부터 두뇌의 균형까지 — 2인의 전담 원장이 세밀하게 동행합니다
      text: 한방신경정신과 전문의 석선희 원장의 맞춤 한약 및 심층 상담 & 임상 22년 차 류석균 원장의 두뇌·자율신경 특화 진료. 복잡한 도심 일상 속, 지친 뇌와 마음에 온전한 쉼과 균형을 전합니다.
      primary_action:
        text: 네이버 실시간 예약
        url: "#"
        icon: calendar-days
        style: gradient
      secondary_action:
        text: 카카오톡 1:1 비밀상담
        url: "#"
        icon: chat-bubble-left-right
        style: ghost
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      section_break:
        fade_bottom: "#0d2733"
      background:
        color: "#0d2733"
        gradient:
          type: radial
          start: "rgba(58,165,198,0.35)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]

  # ──────────────────────────────────────────────────────────
  # 원장 및 진료 철학 소개
  # ──────────────────────────────────────────────────────────
  - block: team-showcase
    id: doctors
    content:
      title: 원장 및 진료 철학 소개
      subtitle: 단순한 증상 완화를 넘어, 치료가 끝난 이후의 일상이 평온할 수 있도록 돕습니다.
      user_groups:
        - 전담 원장
      sort_by: weight
      sort_ascending: true
    design:
      show_role: true
      show_organizations: true
      show_interests: true
      max_interests: 5
      align: center
      max_columns: 2
      show_social: false
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  # ──────────────────────────────────────────────────────────
  # 특화 질환 (9종) 요약 — 상단 메뉴 "특화 질환" 클릭 시 이동
  # ──────────────────────────────────────────────────────────
  - block: focus-areas
    id: diseases
    content:
      title: 특화 질환
      text: 해아림한의원 잠실점이 세밀하게 진료하는 9가지 특화 질환입니다. 카드를 눌러 증상·원인·치료 방법을 확인하세요.
      items:
        - name: 공황장애 · 불안장애
          description: 반복되는 공황발작과 예기불안, 이유 없는 걱정과 긴장.
          icon: hero/heart
          gradient: from-primary-400 to-primary-600
          url: /diseases/anxiety-panic/
          topics: ["가슴 두근거림", "숨막힘", "예기불안"]
        - name: 틱장애
          description: 반복되는 눈 깜빡임, 헛기침, 어깨 들썩임 등 근육·음성 틱.
          icon: hero/face-smile
          gradient: from-secondary-400 to-secondary-600
          url: /diseases/tic/
          topics: ["근육틱", "음성틱", "뚜렛장애"]
        - name: ADHD
          description: 지속적인 주의력 부족, 산만함, 충동적인 행동.
          icon: hero/bolt
          gradient: from-amber-400 to-orange-500
          url: /diseases/adhd/
          topics: ["주의력결핍", "과잉행동", "충동성"]
        - name: 강박장애
          description: 반복되는 강박사고와 이를 멈추기 어려운 강박행동.
          icon: hero/arrow-path
          gradient: from-purple-400 to-purple-600
          url: /diseases/ocd/
          topics: ["강박사고", "반복행동", "확인강박"]
        - name: 우울장애
          description: 지속되는 무기력, 의욕 저하, 수면·식욕 변화.
          icon: hero/cloud
          gradient: from-slate-400 to-slate-600
          url: /diseases/depression/
          topics: ["무기력", "의욕저하", "수면변화"]
        - name: 불면증
          description: 잠들기 어렵거나 자주 깨는 등 수면의 질과 양이 저하된 상태.
          icon: hero/moon
          gradient: from-blue-400 to-blue-600
          url: /diseases/insomnia/
          topics: ["입면장애", "수면유지장애", "조기각성"]
        - name: 자율신경실조증
          description: 원인 모를 두근거림, 어지럼증, 소화불량이 반복되는 상태.
          icon: hero/scale
          gradient: from-cyan-400 to-cyan-600
          url: /diseases/dysautonomia/
          topics: ["두근거림", "어지럼증", "만성피로"]
        - name: 다한증
          description: 손·발·얼굴에서 유난히 많이 나는 땀.
          icon: hero/beaker
          gradient: from-sky-400 to-sky-600
          url: /diseases/hyperhidrosis/
          topics: ["다한", "손발냉감", "사회불안"]
        - name: 신경성 질환
          description: 스트레스만 받으면 심해지는 두통, 어지럼증, 소화불량.
          icon: hero/sparkles
          gradient: from-rose-400 to-rose-600
          url: /diseases/nervous-system/
          topics: ["신경성두통", "신경성소화불량", "근긴장"]
    design:
      layout: cards
      css_class: "bg-white dark:bg-gray-900"

  # ──────────────────────────────────────────────────────────
  # 첫 진료시 — 4단계 진료 프로세스 (특화 질환 다음, 치료 방법 이전)
  # ──────────────────────────────────────────────────────────
  - block: steps
    id: process
    content:
      title: 편안한 첫걸음을 위한 4단계 진료 프로세스
      text: 처음 내원하시는 분들도 부담 없이 준비할 수 있도록 과정을 안내해 드립니다.
      items:
        - title: 사전 예약
          text: 네이버 예약, 카카오톡 비밀상담을 통한 프라이빗 예약
          icon: calendar-days
        - title: 기초 설문 & 정밀 검사
          text: 두뇌 및 자율신경 기능 상태 객관적 측정
          icon: clipboard-document-check
        - title: 1:1 전담 원장 심층 진료
          text: 증상의 원인을 짚어내는 면밀한 진단과 상담
          icon: user-group
        - title: 맞춤 처방 & 지속 케어
          text: 개인 맞춤 한약 탕전 및 정기적인 회복 경과 점검
          icon: beaker
    design:
      layout: horizontal
      marker_style: icon
      connector: line
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  # ──────────────────────────────────────────────────────────
  # 진료안내 · 치료 방법 (8종) 요약 — 상단 메뉴 "진료안내" 클릭 시 이동
  # ──────────────────────────────────────────────────────────
  - block: treatment-grid
    id: treatments
    content:
      title: 진료안내 · 치료 방법
      text: 증상과 체질에 맞춰 조합해 진행하는 10가지 치료 방법입니다.
      items:
        - name: 개인맞춤한약
          description: 증상과 체질에 맞춰 1:1로 처방되는 청정 한약, 치료의 핵심 축입니다.
          icon: hero/beaker
          gradient: from-primary-400 to-primary-600
          url: /guide/treatments/herbal-medicine/
        - name: 침치료
          description: 경혈 자극으로 기혈 순환을 촉진하고 신체 이완을 돕습니다.
          icon: hero/sparkles
          gradient: from-secondary-400 to-secondary-600
          url: /guide/treatments/acupuncture/
        - name: 약침치료
          description: 정제된 한약재 추출물을 경혈에 직접 주입하는 정밀 시술입니다.
          icon: hero/beaker
          gradient: from-purple-400 to-purple-600
          url: /guide/treatments/pharmacopuncture/
        - name: 추나요법
          description: 손으로 척추·관절의 구조적 균형을 바로잡는 수기 치료입니다.
          icon: hero/hand-raised
          gradient: from-amber-400 to-orange-500
          url: /guide/treatments/chuna/
        - name: 두개천골요법
          description: 매우 가벼운 접촉으로 뇌척수액 리듬을 조율하는 부드러운 치료입니다.
          icon: hero/hand-raised
          gradient: from-cyan-400 to-cyan-600
          url: /guide/treatments/cranial-sacral/
        - name: FCST 교정
          description: 얼굴과 두개골 주변의 구조적 균형을 교정합니다.
          icon: hero/face-smile
          gradient: from-rose-400 to-rose-600
          url: /guide/treatments/fcst/
        - name: 두뇌훈련
          description: 뇌기능 평가를 바탕으로 집중력과 자기조절력을 훈련합니다.
          icon: hero/cpu-chip
          gradient: from-sky-400 to-sky-600
          url: /guide/treatments/brain-training/
        - name: 전문의 심리상담
          description: 한방신경정신과 전문의와 함께 진행하는 심층 상담입니다.
          icon: hero/chat-bubble-left-right
          gradient: from-slate-400 to-slate-600
          url: /guide/treatments/counseling/
        - name: 향기치료
          description: 후각을 통해 뇌 감정 중추에 직접 작용해 심신 이완을 돕습니다.
          icon: hero/sparkles
          gradient: from-emerald-400 to-teal-600
          url: /guide/treatments/aromatherapy/
        - name: 엔오클리닉
          description: 일산화질소(NO) 기반으로 혈액순환과 뇌혈류 개선을 돕습니다.
          icon: hero/bolt
          gradient: from-indigo-400 to-blue-600
          url: /guide/treatments/no-clinic/
    design:
      layout: cards
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  # ──────────────────────────────────────────────────────────
  # 3. 해아림한의원 잠실점을 믿고 찾는 이유 (2대 전담 분과)
  # ──────────────────────────────────────────────────────────
  - block: focus-areas
    id: trust
    content:
      title: 해아림한의원 잠실점을 믿고 찾는 이유
      subtitle: 2인의 전담 원장 · 2대 분과 체계
      text: 원인을 짚어내는 정밀 진단부터 1:1 맞춤 한약, 심층 상담·침구 치료까지 이어지는 전담 케어 시스템입니다. 화·금요일은 저녁 8시까지, 토요일·대체공휴일은 점심시간 없이 오후 4시까지 야간·주말 진료도 운영합니다.
      items:
        - name: 한방신경정신과 & 심신 통합 클리닉
          description: |
            **석선희 원장 전담** · 공황장애, 불안장애, 강박증, 우울증, 불면증

            1. 정밀 검진 및 원인 분석 — 자율신경 균형 검사 및 뇌기능 평가
            2. 1:1 맞춤 한약 치료(핵심) — 항진된 신경계 안정과 오장육부 균형 회복을 돕는 개인별 탕전
            3. 심층 상담치료(병행) — 전문의의 인지적 통찰 및 심신 이완 지도
            4. 침구 및 신경 이완 치료 — 두경부 긴장 완화 및 기혈 순환 촉진
          icon: hero/heart
          gradient: from-primary-400 to-primary-600
          topics:
            - 공황장애
            - 불안장애
            - 강박증
            - 우울증
            - 불면증
        - name: 두뇌 기능 & 자율신경 특화 클리닉
          description: |
            **류석균 원장 전담** · 소아·성인 틱장애, ADHD, 자율신경실조증, 다한증, 신경성 두통·어지럼증

            1. 22년 임상 기반 정밀 평가 — 두뇌 발달 단계와 자율신경계 기능 상태 진단
            2. 두뇌 기능 맞춤 한약 처방 — 뇌 기능 균형과 신경계 과흥분 조절을 돕는 청정 한약
            3. 침구 치료 및 경추 교정 — 뇌혈류 순환 촉진 및 신체 균형 안정화
            4. 생활 관리 코칭 — 수면, 영양, 스트레스 조절 등 일상 적응 관리
          icon: hero/cpu-chip
          gradient: from-secondary-400 to-secondary-600
          topics:
            - 틱장애
            - ADHD
            - 자율신경실조증
            - 다한증
            - 신경성 두통·어지럼증
    design:
      layout: cards

  # ──────────────────────────────────────────────────────────
  # 치료후기 미리보기 — 상단 메뉴 "치료후기" 클릭 시 이동
  # ──────────────────────────────────────────────────────────
  - block: focus-areas
    id: reviews-preview
    content:
      title: 치료 후기
      text: 해아림한의원 잠실점에서 치료받으신 분들의 실제 이야기입니다.
      items:
        - name: 공황장애 치료 후기
          description: "치료 전: 사람 많은 곳, 폐쇄된 공간에서 심하게 호흡이 힘들었고 밤에 잠들기 어려웠습니다. **치료 후**: 사람 많은 곳에도 신경 쓰지 않고 잘 적응하며, 밤에 잠도 잘 잡니다."
          image: reviews/mental-health/review1.jpg
          topics: ["공황장애"]
        - name: ADHD · 9개월 치료 (보호자 후기)
          description: "치료 전: 숙제할 때 집중하지 못하고 매일 아이와 다퉜습니다. **치료 후**: 한약과 두뇌훈련, 침 치료를 병행하며 서서히 좋아져, 학원 선생님도 놀랄 만큼 집중력이 좋아졌습니다."
          image: reviews/tic-adhd/review1.jpg
          topics: ["ADHD"]
        - name: 얼굴 · 겨드랑이 다한증 · 7개월 치료
          description: "치료 전: 출퇴근 지하철, 사람 많은 장소에서 화장이 지워질 정도로 땀이 났습니다. **치료 후**: 사람 많은 강의나 출퇴근시에도 땀이 거의 나지 않습니다."
          image: reviews/hyperhidrosis/review4.jpg
          topics: ["다한증"]
      cta:
        text: 치료 후기 전체 보기
        url: /reviews/
        icon: hero/arrow-right
    design:
      layout: cards
      css_class: "bg-white dark:bg-gray-900"

  # ──────────────────────────────────────────────────────────
  # 5. 오시는 길 & 진료시간 — 지도
  # ──────────────────────────────────────────────────────────
  - block: clinic-map
    id: location
    content:
      title: 오시는 길
      subtitle: 잠실새내역 4번 출구 도보 3분
      lat: 37.5114327
      lng: 127.0819814
      zoom: 17
      address: |
        서울특별시 송파구 올림픽로 102 서일빌딩 3층
        잠실새내역(4번 출구) 도보 3분 · 서일빌딩 내 주차 가능
      directions_text: 길찾기
      directions_url: "https://www.google.com/maps/dir/?api=1&destination=37.5114327,127.0819814"

  # ──────────────────────────────────────────────────────────
  # 진료시간 & 연락처
  # ──────────────────────────────────────────────────────────
  - block: contact-info
    content:
      title: 진료시간 & 연락처
      visit_title: 진료시간
      connect_title: 문의 및 상담
      office_hours:
        - "월 · 수: 10:00 ~ 19:00 (점심시간 13:00 ~ 14:00)"
        - "화 · 금 (야간진료): 10:00 ~ 20:00 (점심시간 13:00 ~ 14:00)"
        - "토요일 · 대체공휴일: 10:00 ~ 16:00 (점심시간 없이 연속 진료)"
        - "정기 휴진: 목요일 · 일요일 · 공휴일 (대체공휴일은 진료)"
      phone: "02-6954-7575"
      social:
        - icon: brands/instagram
          url: https://www.instagram.com/healimjs
      show_form: false
    design:
      css_class: "bg-white dark:bg-gray-900"
      spacing:
        padding: ["1rem", 0, "3rem", 0]

  # ──────────────────────────────────────────────────────────
  # 8. 건강 칼럼 & 원내 소식
  # ──────────────────────────────────────────────────────────
  - block: content-collection
    id: news
    content:
      title: 건강 칼럼 & 원내 소식
      text: 해아림한의원 잠실점 원장들이 직접 전하는 건강 정보와 진료 안내입니다.
      count: 3
      sort_by: date
      sort_ascending: false
      filters:
        tags:
          - 칼럼
          - 공지
    design:
      view: card
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  # ──────────────────────────────────────────────────────────
  # 7. 자주 묻는 질문 (FAQ)
  # ──────────────────────────────────────────────────────────
  - block: faq
    id: faq
    content:
      title: 자주 묻는 질문
      subtitle: 내원 전 궁금한 점을 미리 확인해 보세요.
      items:
        - question: 첫 진료 시 시간은 얼마나 소요되나요?
          answer: |
            객관적인 검사와 1:1 심층 상담이 진행되므로 초진 시 약 50분~1시간 정도 여유 있게 내원해 주시는 것을 권장합니다.
        - question: 한약 처방 없이 심리상담만 받을 수 있나요?
          answer: |
            마음의 불안과 긴장은 뇌신경계와 신체 생리적 불균형에서 기인하는 경우가 많습니다. 따라서 신체 균형을 회복시키는 1:1 맞춤 한약 치료를 기본 축으로 심층 상담이 병행될 때 가장 안정적인 회복이 가능합니다.
        - question: 직장인이나 학생인데 진료시간 맞추기가 어렵습니다.
          answer: |
            화요일과 금요일은 저녁 8시까지 야간진료를 운영하며, 토요일과 대체공휴일에는 점심시간 없이 오후 4시까지 진료하고 있습니다.

  # ──────────────────────────────────────────────────────────
  # 9. 간편 예약 및 상담 신청
  # ──────────────────────────────────────────────────────────
  - block: cta-card
    id: reserve
    content:
      title: 지금, 편안한 마음으로 첫 상담을 시작해 보세요
      text: 네이버 예약 · 카카오톡 1:1 비밀상담 · 공식 인스타그램 DM(@healimjs) · 전화 문의(02-6954-7575)로 편하게 문의해 주세요.
      button:
        text: 네이버 실시간 예약
        url: "#"
    design:
      section_break:
        fade_top: "#ffffff"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
