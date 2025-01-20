---
title: "Introduction to digital image processing and spatial filtering"
date: 2025-01-20 00:00:00 +0900
categories: [blog]
tags: [image processing, computer vision]
layout: single
author_profile: true
---

Introduction to Digital Image Processing and Spatial Filtering

## Introduction

회사에서 진행한 **AI & DS Trend Seminar**를 수강하였다. 

2024년 여름에 수료했던 삼성전자 - 서울대 공동연구소의 **AI Expert** 과정의 교수진이 추가로 강의하시는 교육 과정이라 하여 바로 신청했다.

다행히 Expert 과정 수료생은 우선 입과 자격이 주어진다 하여 어느 강의를 들을지 고를 여유도 있었다.

서울대 [이종호 교수님](https://list.snu.ac.kr/home)의 *Digital Image Processing의 이론과 실습*을 수강 신청했다.

Expert 과정에서도 Image Processing을 활용하여 과제를 진행했고, 학부에서도 여러 Computer Vision 프로젝트를 진행 중인지라 해당 수업으로 신청했다.

<details>
<summary>Curriculum</summary>
Day1: Introduction to digital image processing & Spatial filtering
<br>
Day2: 2D Fourier transform and frequency domain filtering & Advanced transformation
<br>
Day3: Linear system and solutions for overdetermined problem & Solutions for underdetermined problem
</details>


## 1 
대학교 4학년 ~ 석사 1년차 수준
motivation: AIRSMEDICAL
점묘화, 서로 다른 색상의 점을 찍어두고 멀리서보면 두 색상이 섞인 것처럼 보인다
-> digital image의 시초

Frequency
what is frequency?
 sin waveform, 
define frequency in image
: image standard unit(e.g. 1cm) 내에 밝고 어두움이 얼마나 반복되는가

fourier transform
to sound or image

![alt text](image.png)
center는 image의 밝기 값 중 가장 많이 등장한 constance
각 pixel은 image(video)의 unit 내에서 ... ? basis function
: 중앙에서 해당 pixel까지 나아간 방향이 basis function의 waveform 방향인가?
: 왜 4사분면 모두 필요한가? 두 사분면만 있으면 될거같은데


computational image
: X ray, lenseless camera, electron microscopy, lidar

digital image processing에는 3개의 level
- low level
- mid level
- high level
example들

major categories for digital image processing
-
-
-

많은 catogories들이 deep learning의 영역으로 넘어감
훨씬 높은 성능을 보임

## 2 Image Fundamentals
이 image는 몇 pixel일까
computer가 표현하려면 x * y * z channel이 어떻게 될까
한 pixel은 몇 bit로 표현했을까

original image에 random white noise(gaussian)를 더해서 noisy한
image가 됨

sampling
내가 정한 grid size에 따라서 sampling

quantization
자연계의 실수 값을 사전 정의한 특정 값으로 mapping함
2의 N승 bit으로(8개로 quantization하면 3 bit quantization)
보통 8 bit quantization을 많이 사용함(standard)

problem of low quantization bit
- saturation: 밝은 영역을 날려버림
- noise


## 3 Histogram
image의 pixel의 brightness(0~255)의 분포
contrast(대비)가 높은 혹은 낮은 image
contrast가 높은 이미지가 좋음
: 높은 이미지를 낮게 만들 수는 있는데, 낮은 이미지를 높게 만들 수는 없음
: data를 처음에 얻을 때, 사진을 찍을 때, full dimending range로 setting이 되어야함
: 나의 detector의 quant bit 수가 높지 않으면 image를 다시 높게 만들 수 없음

picewise linear transformation
- correction
- threshold

gamma correction
: relationship between input pixel intensity and display utput luminance
: display device에서 원하는 밝기 분포가 아닐때, brightness나 contrast를 바꾸지 말고 gamma를 바꿔라
: display device의 gamma를 안다면, 미리 input image의 intensities를 pre-compensate 함


**Histogram Equalization**
probability density function
input image에 상관없이 
CDF를 이용함

example: image of moon
- histogram normalization을 할 때 mask를 쓰기도 함
- 혹은 특정 intensity(0~5 등)은 제외하고 norm
  
중요: 항상 영상처리의 첫번째는 영상을 본다



## Practice



## 4
















