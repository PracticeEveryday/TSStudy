// JS 문자열 선언
//var str = "hello";

// TS 문자열 선언 문자열
const str: string = "hello";

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ["Capt", "Thor", "Hulk"];
const items: number[] = [1, 2, 3, 4]; // Array 배열 리터럴 가능

// TS 튜플
// 위치까지 정할 수 있음 배열의 인덱스에도 타입이 정해져 있음.
// 모든 인덱스에 타입에 정해져 있는 배열
let address: [string, number] = ["gamgnam", 100];

// TS 객체를 정의하는 방식
let obj: object = {};

// let person: object = {
//   name: "capt",
//   age: 100,
// };

// 구체적으로 객체의 타입까지 지원 가능함
let person: { name: string; age: number } = {
  name: "capt",
  age: 100,
};

// TS 진위값
let show: boolean = false;
