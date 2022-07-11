// 타입을 마치 함수의 파라미터처럼 받는다. => generic

function logText(text) {
  console.log(text);
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
