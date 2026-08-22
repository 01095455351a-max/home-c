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
      announcement:
        badge:
          text: SNS
          color: primary
        text: 공식 인스타그램 @healimjs
        link:
          text: 바로가기
          url: https://www.instagram.com/healimjs
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      section_break:
        fade_bottom: "#0f2027"
      background:
        color: "#0a1a1f"
        gradient:
          type: radial
          start: "rgba(20,184,166,0.35)"
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
  # 2. 신뢰 핵심 배지 (3대 강점)
  # ──────────────────────────────────────────────────────────
  - block: features
    id: trust
    content:
      title: 해아림한의원 잠실점을 믿고 찾는 이유
      items:
        - name: 한방신경정신과 전문의
          icon: hero/academic-cap
          description: 공황·불안·우울·불면까지, 석선희 원장의 맞춤 한약 및 심층 상담으로 진행합니다.
        - name: 임상 22년의 노하우
          icon: hero/sparkles
          description: 틱장애·ADHD·자율신경실조증·다한증을 류석균 원장이 집중 케어합니다.
        - name: 화·금 저녁 8시 야간진료
          icon: hero/moon
          description: 토요일·대체공휴일에는 오후 4시까지 점심시간 없이 진료합니다.
    design:
      layout: grid
      css_class: "bg-white dark:bg-gray-900"

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
  # 3. 중점 클리닉 (2대 전담 분과)
  # ──────────────────────────────────────────────────────────
  - block: focus-areas
    id: clinics
    content:
      title: 중점 클리닉
      subtitle: 2대 전담 분과
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
  # 4. 치료 이야기 및 내원 안내 — 4단계 진료 프로세스
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
  # 5. 오시는 길 & 진료시간 — 지도
  # ──────────────────────────────────────────────────────────
  - block: map
    id: location
    content:
      title: 오시는 길
      subtitle: 잠실새내역 4번 출구 도보 3분
      location:
        lat: 37.5114327
        lng: 127.0819814
        address: |
          서울특별시 송파구 올림픽로 102 서일빌딩 3층
          잠실새내역(4번 출구) 도보 3분 · 서일빌딩 내 주차 가능
      zoom: 16
      cta:
        directions:
          text: 길찾기
    design:
      layout: side-by-side
      height: md

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
      phone: "02-xxx-xxxx"
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
      text: 네이버 예약 · 카카오톡 1:1 비밀상담 · 공식 인스타그램 DM(@healimjs) · 전화 문의(02-xxx-xxxx)로 편하게 문의해 주세요.
      button:
        text: 네이버 실시간 예약
        url: "#"
    design:
      section_break:
        fade_top: "#ffffff"
      card:
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
---
