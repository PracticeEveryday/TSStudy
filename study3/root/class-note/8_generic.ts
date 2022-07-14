// 타입을 마치 함수의 파라미터처럼 받는다. => generic

function logText(text) {
  console.log(text);
  text.split("").reverse().join("");
  return text;
}

logText(10); // 숫자 10
logText("하이"); // 문자열 하이
logText(true); // 진위값 true

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}

// 함수를 호출할 때 인자 파라미터의 타입을 뭔지 지정하고 넘긴다!
logText2<string>("10");

// logText라는 함수를 작성하는데 logText함수는 text를 받아서 콘솔을 찍고 return을 해주는 함수이다
// logText의 경우 아무 타입도 지정해주지 않기 때문에 암묵적으로 any가 되어 아무 타입의 인자나 다 전달 해줄 수 있다.
// 근데 만약에 logText 내에 text 인자를 split하고 싶어 test.split을 넣으면 나머지 타입은 받지 못한다.
// 이렇게 되면 많은 케이스의 함수를 만들어야 한다!!
// 하지만 logText2의 경우에는 중복되는 것을 방지 할 수 있다.

function logText3(text: string | number) {
  console.log(text);
  return text;
}
