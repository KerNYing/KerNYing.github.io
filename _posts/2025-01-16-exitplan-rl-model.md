---
title: "[Reinforcement Learning] Exitplan(1): Introduction"
date: 2025-01-16 17:40:28 +0900
categories: [blog]
tags: [reinforcement-learning]
layout: single
author_profile: true
---

출구전략은 TV프로그램 대학전쟁2에서 소개된 게임이다.


출구와 장애물이 존재하는 7*7 크기의 격자 게임판에서 진행되는 게임으로, 전후좌우 4방향으로 직선 이동만 가능한 이동말 6개 중 2개를 먼저 탈출시키면 승리하는 게임이다.

이 게임을 웹 상에서 플레이할 수 있도록 KnY에서 [개발하고](https://stockofjobless.tistory.com/69) 있다.

두 플레이어가 대결하는 PvP 모드 외에 싱글 플레이 모드도 개발하기 위해

출구전략 게임을 플레이하는 인공지능 모델을 강화학습을 통해 구현하고자 한다.


우선 모델의 학습 환경을 구현하면서 동시에 모델의 성능을 확인해볼 수 있는 시뮬레이션 게임을 만들어보기로 하자.

Python library인 streamlit을 이용해 유저가 플레이할 수 있도록 게임을 [구현하였다.](https://app-test-4wbaujyuavq3gkqfovlazi.streamlit.app/)

![alt text]({{site.url}}/assets/images/streamlit-exitplan.png)

삐걱거리지만 어느정도 돌아가는 수준까지는 구현하였다.

이제 주어진 Map을 보고 적절한 말과 이동 방향을 결정하는 강화학습 모델을 구현하고 학습시킬 예정이다.