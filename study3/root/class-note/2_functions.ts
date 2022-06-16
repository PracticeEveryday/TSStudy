// 두개의 숫자를 받아 숫자를 돌려주는 함수
// 파라미터에 타입 정의 가능
// return 값도 타입 정의 가능

function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, 20, 30, 40); 2개의 인자가 필요한데 4개를 넣었다.
// 타입스크립트가 함수의 스펙을 이해하고 있음. 파라미터를 제한하는 특성!

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 옵셔널 파라미터
// 특정 파라미터를 선택적으로 쓰고 싶으면 물음표를 쓰면 된다!!!
function log(a: string, b?: string, c?: string) {}

log("hello world");
log("hello ts", "abc");
