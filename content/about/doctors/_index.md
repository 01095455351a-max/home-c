---
title: "의료진 소개"
date: 2026-08-21
type: landing
sections:
  - block: hero
    content:
      eyebrow: 한의원 소개
      title: 의료진 소개
      text: 2인의 전담 원장이 각자의 전문 분야로 세밀하게 동행합니다.
    design:
      css_class: "bg-gradient-to-br from-primary-600 to-secondary-700 text-white"
      spacing:
        padding: ["4rem", 0, "3rem", 0]

  - block: markdown
    content:
      text: |
        ![해아림한의원 잠실점 석선희 원장, 류석균 원장](doctors-together.png)

  - block: team-showcase
    content:
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

  - block: focus-areas
    content:
      title: 원장 이야기
      text: 각 원장의 진료 철학과 걸어온 길을 조금 더 깊이 소개합니다.
      items:
        - name: 류석균 원장 이야기
          description: 임상 22년, 두뇌·자율신경 질환을 전담해 온 여정을 소개합니다.
          icon: hero/cpu-chip
          gradient: from-secondary-400 to-secondary-600
          url: /about/doctors/ryu-story/
        - name: 석선희 원장 이야기
          description: 한방신경정신과 전문의로서 걸어온 길과 진료 철학을 소개합니다.
          icon: hero/heart
          gradient: from-primary-400 to-primary-600
          url: /about/doctors/seok-story/
    design:
      layout: cards
---
