---
title: "Reinforcement Learning Model for Exitplan"
date: 2025-01-16 23:25:28 -0000
categories: [blog]
tags: [reinforcement-learning]
layout: single
author_profile: true
---

출구전략(Exitplan)은 TV프로그램 대학전쟁2에서 소개된 게임입니다.

출구와 장애물이 존재하는 7*7 크기의 격자 게임판에서 진행되는 게임으로,
전후좌우 4방향으로 직선 이동만 가능한 이동말 6개 중 2개를 먼저 탈출시키면 승리하는 게임입니다.

이 게임을 웹 상에서 즐길 수 있도록 KnY에서 [개발하고](https://stockofjobless.tistory.com/69) 있습니다.

두 플레이어가 대결하는 PvP도 좋지만, 대부분의 보드게임류들이 그렇듯 컴퓨터, 즉, Bot과 대결하는 모드도 필수적입니다.

KnY은 이 Bot을 강화학습을 이용해 구현하고자 합니다.


