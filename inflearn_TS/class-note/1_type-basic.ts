// JS 문자열 선언
// let str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["capt", "thor", "hulk"];
let arr2: number[] = [1, 2, 3];

// TS 튜플
// 순서의 타입까지 넣는게 튜플!
let address: [string, number] = ["gangnam", 100];

// TS 객채
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };

// 구체적으로 객체의 프로퍼티 타입까지 정할 수 있음 안 넣으면 또 에러
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// TS 진위값
let show: boolean = true;
let show2: boolean = false;
