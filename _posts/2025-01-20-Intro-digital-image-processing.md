---
title: "Introduction to digital image processing and spatial filtering"
date: 2025-01-20 00:00:00 +0900
categories: [blog]
tags: [image processing, computer vision, fourier transformation]
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



## 4 Geometric Operations
Shift, scale and flip
rotate, shear
수학적으로 표기 가능
모두 통틀어서 **affine** transformation

interpolation
image를 rotate(example)하면 pixel과 grid가 일치하지 않음
interpolation하는 여러 방식
- nearest neighbor, bilinear, bicubic

practical하게는 주위 x,y 15개씩 계산할 때 사람이 구분하기 어려울 정도
서로 영향을 줄때는 어떻게 우선순위가?

## 5 Convolution
linear space invariance system
system은 input을 받아서 output을 내보냄
- linear: input에 constance를 가감승제 혹은, input끼리 가감승제 해도 output이 동일한 비율로 변화
- space invariance: input을 shift 시켰을 때, output도 동일하게 shift 됨됨 

-> Linear Space Invariance System (LSI System)


LSI System을 가지고 있다면
그 출력은
impulse response function
point spread function
그 입력과 LSI System을 convolution 해준다 -> 모르겠음
(학부생 기준 1시간반 걸려 설명해야함)


LSI System 이라면 나의 출력은 입력과 내 시스템의 point spread function의 convolution으로 결정된다.

convolutional filter를 flip한 다음 sliding window 연산
-> digital image processing의 두번째 tool
: convolution을 이용해서 filtering

convolution kernel == IRF == PSF

example2: edge만 남김
example3: 가로방향의 edge를 주로 남김

kernel을 어떻게 정의하냐 따라 우리가 원하는 filter를 만들 수 있음
-> image processing의 두번째 기초 방식

## 6 Spatial Filter
여러 용도의 kernel(==filter)
- blur, edge 등

origin과 filter 크기가 달라도 padding, crop 등으로 맞추기도 함

smoothing filter
: low pass filter or moving average filter


enhancing or sharpening images
- strengthen edges of original image

median filter
- salt and pepper noise
  
단점: 처리 후에 noise가 아니라 실제처럼 보임

gaussian noise -> low pass filter
salt and pepper or impulsive noise -> median filter

## Fourier Transform
complex exponential function
discrete fourier transform: 내적

physical meaning: 신호를 decompose -> 분해한다


spatial frequency

## Practice
using convolution as filter
smoothing and sharpening with convolution





