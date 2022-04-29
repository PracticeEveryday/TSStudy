// TS는 웹이 바로 못 읽음 웹은 JS만 읽을 수 있음
// so compile 통해 ts파일을 js파일로 변환해 줘야함!!

// tsc index.js

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(10, 20);
