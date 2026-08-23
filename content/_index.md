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
      title: 마음의 불안부터 두뇌의 균형까지
      text: 공황·불안·불면부터 틱·ADHD·자율신경 문제까지, 두 원장이 각자의 전문 분야를 중심으로 세밀하게 진료합니다.
      primary_action:
        text: 네이버 실시간 예약
        url: "#"
        icon: calendar-days
        style: gradient
      secondary_action:
        text: 카카오톡 1:1 상담
        url: "#"
        icon: chat-bubble-left-right
        style: ghost
    design:
      spacing:
        padding: ["6rem", 0, "5rem", 0]
        margin: [0, 0, 0, 0]
      section_break:
        fade_bottom: "#F7F3EC"
      background:
        color: "#F1EDE1"
        gradient:
          type: radial
          start: "rgba(63,175,179,0.14)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"

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
          image: diseases/anxiety.png
          icon: hero/heart
          gradient: from-primary-400 to-primary-600
          url: /diseases/anxiety-panic/
          topics: ["가슴 두근거림", "숨막힘", "예기불안"]
          cta:
            text: 자세히 보기
            url: /diseases/anxiety-panic/
            icon: hero/arrow-right
        - name: 틱장애
          description: 반복되는 눈 깜빡임, 헛기침, 어깨 들썩임 등 근육·음성 틱.
          image: diseases/tic.png
          icon: hero/face-smile
          gradient: from-secondary-400 to-secondary-600
          url: /diseases/tic/
          topics: ["근육틱", "음성틱", "뚜렛장애"]
          cta:
            text: 자세히 보기
            url: /diseases/tic/
            icon: hero/arrow-right
        - name: ADHD
          description: 지속적인 주의력 부족, 산만함, 충동적인 행동.
          image: diseases/adhd.png
          icon: hero/bolt
          gradient: from-amber-400 to-orange-500
          url: /diseases/adhd/
          topics: ["주의력결핍", "과잉행동", "충동성"]
          cta:
            text: 자세히 보기
            url: /diseases/adhd/
            icon: hero/arrow-right
        - name: 강박장애
          description: 반복되는 강박사고와 이를 멈추기 어려운 강박행동.
          image: diseases/ocd.png
          icon: hero/arrow-path
          gradient: from-purple-400 to-purple-600
          url: /diseases/ocd/
          topics: ["강박사고", "반복행동", "확인강박"]
          cta:
            text: 자세히 보기
            url: /diseases/ocd/
            icon: hero/arrow-right
        - name: 우울장애
          description: 지속되는 무기력, 의욕 저하, 수면·식욕 변화.
          image: diseases/depression.png
          icon: hero/cloud
          gradient: from-slate-400 to-slate-600
          url: /diseases/depression/
          topics: ["무기력", "의욕저하", "수면변화"]
          cta:
            text: 자세히 보기
            url: /diseases/depression/
            icon: hero/arrow-right
        - name: 불면증
          description: 잠들기 어렵거나 자주 깨는 등 수면의 질과 양이 저하된 상태.
          image: diseases/insomnia.png
          icon: hero/moon
          gradient: from-blue-400 to-blue-600
          url: /diseases/insomnia/
          topics: ["입면장애", "수면유지장애", "조기각성"]
          cta:
            text: 자세히 보기
            url: /diseases/insomnia/
            icon: hero/arrow-right
        - name: 자율신경실조증
          description: 원인 모를 두근거림, 어지럼증, 소화불량이 반복되는 상태.
          image: diseases/dysautonomia.png
          icon: hero/scale
          gradient: from-cyan-400 to-cyan-600
          url: /diseases/dysautonomia/
          topics: ["두근거림", "어지럼증", "만성피로"]
          cta:
            text: 자세히 보기
            url: /diseases/dysautonomia/
            icon: hero/arrow-right
        - name: 다한증
          description: 손·발·얼굴에서 유난히 많이 나는 땀.
          image: diseases/hyperhidrosis.png
          icon: hero/beaker
          gradient: from-sky-400 to-sky-600
          url: /diseases/hyperhidrosis/
          topics: ["다한", "손발냉감", "사회불안"]
          cta:
            text: 자세히 보기
            url: /diseases/hyperhidrosis/
            icon: hero/arrow-right
        - name: 신경성 질환
          description: 스트레스만 받으면 심해지는 두통, 어지럼증, 소화불량.
          image: diseases/nervous-system.png
          icon: hero/sparkles
          gradient: from-rose-400 to-rose-600
          url: /diseases/nervous-system/
          topics: ["신경성두통", "신경성소화불량", "근긴장"]
          cta:
            text: 자세히 보기
            url: /diseases/nervous-system/
            icon: hero/arrow-right
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
          text: 네이버 예약, 카카오톡 1:1 상담을 통한 프라이빗 예약
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
  # 해아림한의원 잠실점 둘러보기 — 원내 사진 슬라이드 (진료 프로세스 다음)
  # ──────────────────────────────────────────────────────────
  - block: clinic-gallery
    id: gallery
    content:
      title: 해아림한의원 잠실점 둘러보기
      subtitle: 편안하고 안정감 있는 공간에서 진료받으실 수 있습니다.
      items:
        - image: clinic/reception.jpg
          caption: 접수 데스크
        - image: clinic/waiting-room.jpg
          caption: 대기 공간
        - image: clinic/counseling-room.jpg
          caption: 1:1 상담실
        - image: clinic/treatment-room.jpg
          caption: 치료실

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
      text: 원인을 짚어내는 정밀 진단부터 1:1 맞춤 한약, 심층 상담·침구 치료까지 이어지는 전담 케어 시스템입니다.
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
          url: /about/doctors/#seok-seonhui
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
          url: /about/doctors/#ryu-seokgyun
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
        - name: ADHD
          description: "치료 전: 숙제할 때 집중하지 못하고 매일 아이와 다퉜습니다. **치료 후**: 한약과 두뇌훈련, 침 치료를 병행하며 서서히 좋아져, 학원 선생님도 놀랄 만큼 집중력이 좋아졌습니다."
          image: reviews/tic-adhd/review1.jpg
          topics: ["ADHD", "한약치료", "두뇌훈련", "침치료"]
        - name: 얼굴 · 겨드랑이 다한증
          description: "치료 전: 출퇴근 지하철, 사람 많은 장소에서 화장이 지워질 정도로 땀이 났습니다. **치료 후**: 사람 많은 강의나 출퇴근시에도 땀이 거의 나지 않습니다."
          image: reviews/hyperhidrosis/review4.jpg
          topics: ["다한증"]
      cta:
        text: 치료후기 더 보기
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
        잠실새내역(4번 출구) 도보 3분 · 서일빌딩 뒷편 주차 가능
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
  # 8. 원장 컬럼
  # ──────────────────────────────────────────────────────────
  - block: column-grid
    id: news
    content:
      title: 원장 컬럼
      text: 해아림한의원 잠실점 원장들이 직접 전하는 건강 정보와 진료 안내입니다.
      count: 6
      cta:
        text: 컬럼 더 보기
        url: /column/
        icon: hero/arrow-right
    design:
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
        - question: 한약 복용을 꼭 해야 하나요?
          answer: |
            마음의 불안과 긴장, 두뇌·자율신경의 불균형은 신체적인 문제이기 때문에, 항진된 신경계와 오장육부의 균형을 회복시키는 1:1 맞춤 한약 치료를 기본 축으로 삼고 있습니다. 상담만으로는 신체적 불균형까지 함께 다루기 어려워, 한약 치료와 상담·침구 치료를 병행할 때 가장 안정적인 회복을 기대할 수 있습니다.
        - question: 정신과 약물 복용 중인데, 한약을 같이 복용해도 되나요?
          answer: |
            현재 복용 중인 양약이 있다면 반드시 초진 시 원장님께 말씀해 주세요. 복용 중인 약물의 종류와 용량을 확인한 후, 안전하게 병행하거나 조정할 수 있는 방향을 함께 안내해 드립니다. 임의로 복용을 중단하지 마시고 반드시 상담 후 결정해 주세요.
        - question: 한약 복용기간은 어느 정도 필요한가요?
          answer: |
            증상의 정도와 기간, 개인의 체질에 따라 차이가 있습니다. 일반적으로 2주 또는 4주 단위로 내원하시어 변화된 몸 상태에 맞춰 처방을 조정하며, 정확한 예상 기간은 초진 검사 후 원장님과의 상담에서 안내해 드립니다.
        - question: 한약 성분을 알 수 있나요?
          answer: |
            네, 가능합니다. 저희는 식품의약품안전처 허가 규격품으로 잔류농약·중금속·위해물질 검사를 통과한 한약재를 사용하고 있으며, 처방 성분에 대해 궁금하신 점은 진료 시 원장님께 편하게 문의해 주세요.
        - question: 한약이 안 맞으면 환불이 되나요?
          answer: |
            복용 중 불편감이나 이상 반응이 있으시면 즉시 내원 또는 연락해 주세요. 상태를 확인한 후 처방 조정 등 필요한 조치를 안내해 드립니다. 환불 관련 정확한 기준과 절차는 원내 정책에 따라 다를 수 있으니 전화 또는 상담을 통해 직접 문의해 주시기 바랍니다.
        - question: 한약 복용시 조심해야 하는 음식이나 주의사항이 있나요?
          answer: |
            처방마다 함께 주의해야 할 음식이나 생활 습관이 다를 수 있어, 처방 시 원장님께서 개별적으로 안내해 드립니다. 일반적으로는 과도한 카페인·음주는 피하시고, 규칙적인 식사와 수면을 유지하시는 것이 회복에 도움이 됩니다.
        - question: 자주 내원해야 하나요?
          answer: |
            대체로 2주 또는 4주 단위로 내원하시며 경과를 확인하고 처방을 조정합니다. 증상이 심하거나 초기 안정이 필요한 경우 더 자주 내원을 안내드릴 수 있으며, 안정기에 접어들면 내원 간격을 늘려나갑니다.
        - question: 상담치료만 받을 수 있나요?
          answer: |
            마음의 불안과 긴장은 뇌신경계와 신체 생리적 불균형에서 기인하는 경우가 많습니다. 따라서 신체 균형을 회복시키는 1:1 맞춤 한약 치료를 기본 축으로 심층 상담이 병행될 때 가장 안정적인 회복이 가능하다고 안내드리고 있습니다. 다만 개별 상황에 따라 상담 비중을 조정할 수 있으니 초진 시 편하게 말씀해 주세요.

  # ──────────────────────────────────────────────────────────
  # 9. 간편 예약 및 상담 신청
  # ──────────────────────────────────────────────────────────
  - block: cta-card
    id: reserve
    content:
      title: 지금, 편안한 마음으로 첫 상담을 시작해 보세요
      text: 네이버 예약 · 카카오톡 1:1 상담 · 공식 인스타그램 DM(@healimjs) · 전화 문의(02-6954-7575)로 편하게 문의해 주세요.
      button:
        text: 네이버 실시간 예약
        url: "#"
    design:
      section_break:
        fade_top: "#ffffff"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
