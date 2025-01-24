---
title: "Introduction to generator function and async/await keyword in javascript"
date: 2025-01-24 00:00:00 +0900
categories: [blog]
tags: [javascript, async, await, generator function, promise, web development]
layout: single
author: "Daniel Ma"
author_profile: true
---

지난번 javascript 탐닉에 이어서 오늘은 js의 제너레이터와 async / await 개념에 대해 공부해보고자 한다.

#### 1\. 제너레이터, generator

async / await를 이해하기 위해서는 먼저 제너레이터의 동작방식에 대한 이해가 필요하다.

제너레이터 함수는 ES6에서 도입된 함수로, 코드블록의 실행을 일시중단한 뒤 다시 필요한 시점에 해당 부분부터 실행할 수 있게 만들어진 함수이다.

위 설명처럼 일반함수와 달리 한번 호출하고 나면 함수안에서의 로직은 호출자(caller)가 제어하지 못한다는 것이 함수에 대한 일반적인 지식이었는데, 제너레이터는 중간중간 함수 호출자에게 제어권을 양도(yield) 가능하다. 또한, 함수 실행 중간에 호출자와 상태를 주고 받을 수 있으며, 함수호출과 동시에 iterator protocol을 따르는 제너레이터 객체를 반환한다는 특징이 있다. 

\* 일반적인 함수는 객체반환이 아닌 함수실행을 한다.

\*\* iterator protocol?

더보기

The iterator protocol defines a standard way to produce **a sequence of values** (either finite or infinite), and potentially a return value when all values have been generated.

MDN의 정의에 따르면 제너레이터 함수 호출을 통해 반환된 제너레이터 객체는 일종의 이터레이터 속성을 지닌 객체이기도 하다.

#### 2\. 제너레이터의 정의와 사용

제너레이터 함수는 function\* 키워드로 선언하며, 해당 함수블록 안에는 최소 1개 이상의 yield 키워드가 존재해야한다.

```
// generator 함수 선언
function* genFunc() {
	yield 1;
}

// generator 함수 표현식
const genFunc = function () {
	yield 1;
};

// generator method
const object = {
	* genFunc() {
    	yield 1;
    }
};

// generator class method
class TestClass {
	* genFunc() {
    	yield 1;
    }
}
```

위 처럼 선언한 뒤, 이터레이터 사용하듯이 사용할 수 있다.

이터레이터는 next() 메소드 사용 시, value 와 done 2가지 프로퍼티가 담긴 객체를 반환한다.

이터레이터내의 시퀀스를 다 돌면 done은 true가 된다. 이전까지는 false에 value에는 해당 순서에 해당하는 value를 가지고 있다.

#### 3\. Async / Await 의 활용

async/await는 ES8에서 도입된 방식으로, async 함수도 쉽게 생각하면 반환값을 resolve하는 promise를 반환하는 함수로, .then(), .catch(), .finally() 같은 후속처리 메소드 없이 사용하기 위해 await와 같이 사용한다.

promise를 사용하던 때에는 resolve를 지정하여 사용하곤 했는데, await를 사용하면 async가 만든 promise가 pending에서 settled 상태로 변화하는 순간 resolve한 결과를 반환하는 형태로 작동한다.

예를 들면 아래와 같다.

```
async function asyncTestFunc() {
	const a = await new Promise(resolve => setTimeout(() => resolve('a'), 1000));
    const b = await new Promise(resolve => setTimeout(() => resolve('b'), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve('c'), 3000));
    
    console.log([a, b, c]);
}

// 6초가 소요된다.
asyncTestFunc();
```

실제로 Promise가 반환되고, 이에 6초 가량의 시간이 걸리는 것을 확인할 수 있다.

<img src="https://kernying.github.io/img/240124_code_1.png" style="width:80%"> 

위 코드는 a, b, c 값을 순차적으로 반환받으면서 총 6초가 걸렸지만, 이를 한번에 비동기형태로 실행하기 위해서는 Promise.all()에 리스트 형태로 매개변수에 지정하면 된다.

이는 흔히 http request를 요청할 때 사용하는 fetch() 함수와 같이 사용된다.

다음에는 이터러블과 이터레이터, 그리고 클로저에 대해 알아보도록 하겠다.




