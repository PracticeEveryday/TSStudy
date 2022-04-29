const sum = (a: number, b: number) => {
  return a + b;
};

// 문자면 안들어옴
let result = sum(10, 20);

// code intellisense 자동 추론
// 코드 가이드 및 자동 완성!!
result.toLocaleString();
