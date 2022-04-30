// 제너릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징,
// 특히 한가지 타입보다 여러가지 타입에서 동작하는 컴포넌트를 만들 때 사용됨

// 제네릭이란 타입을 함수의 파라미터의 개념으로 받게 되는 게 제터릭이다!

// 함수 정의 후 파라미터를 돌려주는 것
function logText(text) {
  console.log(text);
  return text;
}
logText("오잉"); // 오잉
logText(10); // 10
logText(true); // true

// generic? 함수를 호출 할때 인자의 타입을 넘겨줄게
// text타입을 호출할 때 넘겨줄게
function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

// 파라미터의 타입은 "하이"가 됨
// 호출하는 시점에 문자열이 되었던 숫자가 되었던 타입을 넘겨줄 수 잇음
logText2("하이");
logText2(true);

// string이라는 타입을 넘길거야!!
logText2<string>("하이");
