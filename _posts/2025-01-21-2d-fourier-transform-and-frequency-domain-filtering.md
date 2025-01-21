---
title: "2D Fourier transform and frequency domain filtering & Advanced transformation"
date: 2025-01-21 00:00:00 +0900
categories: [blog]
tags: [image processing, computer vision, fourier transformation, frequency domain filtering]
layout: single
author_profile: true
---


## 2D Fourier Transform and Frequency Domain Filtering
2d discrete fourier transform
== fast fourier transform

it is not important to memorize something because we have chat GPT

대부분의 자연계 image의 2d fourier transform 결과에서는
low frequency의 intensity가 강하고, high frequency는 약함

phase 부분은 출력해도 의미있는 정보를 추출하기 어려움

Question!
1) pixel 별 convolution kernel
2) 2DFT -> multiplication -> 2DIFT
-> 2번이 훨씬 연산 size가 작음

fourier transform의 properties
1. image domain의 어려운 부분 중 하나: subpixel shift
-> frequency domain에서는 간단하게 해결
- shift한건 phase만 달라짐
= 주파수 domain에서 shift는 phase shift이다.
-> 정확하게는 linear phase shift

2. image domain의 rotation은 frequency domain에서도 rotation

frequency domain image processing

Input image -> 2d fourier transformation -> frequency domain filter multiplication -> 2d IDF -> output image

anti-aliasing filter
- aliasing이 생겼으면, sample을 하기 전에 blur(LPF)를 통과시켜서 high frequency information을 없애버리면 됨



## Unitary Image Transform
fourier transform을 matrix화 할 수 있음

matrix로 표현할 수 있는 것이 중요하다
왜냐하면 image가 matrix표현이기 때문에


Basis Functions
spatial basis를 각각의 pixel 별로 결정하는 basis 방법, pixel-wise


2D DFT as basis
fourier basis들을 각각 image와 곱하고 평균을 낸 값으로 밝기를 구함
imaginary 부분도 나옴, real 부분만 밝기
- pros
  
- cons


Discrete cosine transform
DCT is part of JPEG

Walsh-Hadamard transform
- basis function only contain +-1
- implementation only requires addition / subtraction

Haar transform

Wavelet transform
- Unitary
- computationally extremely efficient O(N)



## Practice

## Restoration
adaptive filter

gaussian noise를 지우면서 image의 blur함을 없애고 싶음

degradation

denoising - classical하게는 adpative filter
- local variance가 높다는 건 그곳에 특정 구조, edge가 있다는 것
- entire image variance와 local이 비슷하면 flat한 region이라는 뜻



## Morphological Image Processing

## Linear System

interpretation of y = Ax
는 굉장히 어려움
내가 풀고자 하는 문제가 linear하다는 것을 알게되면 y = Ax로 쓸 수 있음
많은 문제들은 Linear하지 않음
내가 문제를 풀고싶은 구간에서 linear한지 찾으면 좋을 것

y is measurement or observation: x is unknown to be determined

ith row of A concerns ith output
jth column of A concerns jth input

ex. a27 = 0 means 2nd output y2 doesn't depend on 7th input x7

linear elastic structure
A matrix에서 어느 element가 값이 클지 예측해보기

linear static circuit

thermal system












