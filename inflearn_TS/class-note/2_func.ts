// 함수의  파라미터에 타입을 정의하는 방식
// const sum = (a: number, b: number) => {
//   return a + b;
// };

// 함수의 반환 값에 타입을 정의하는 방식
const add = (): number => {
  return 10;
};

// 함수의 타입을 정의하는 방식
const sum2 = (a: number, b: number): number => {
  return a + b;
};

const sum = (a: number, b: number) => {
  return a + b;
};

// TS는 안됨!!!
// 함수의 스펙을 정확히 이해함 TS가!!
// 파라미터를 제한하는 TS의 특징!
// sum(10, 20, 30, 40, 50, 60, 70, 80);

// optional parameter
// 특정 파라미터를 선택적으로 쓰고 싶다!!
// 원랜 두 개 새 개 함수를 짰어야 되는데 ? 하나로 정해서 쓸 수 있음!!
const log = (a: string, b?: string, c?: string) => {};
log("hello world");
log("hello ts", "abc");
