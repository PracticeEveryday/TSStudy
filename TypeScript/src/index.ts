// console.log("Hello TypeScript!");

// // let a = 1 + 2;
// // let b = a + 3;
// // let c = {
// //   apple: a,
// //   banana: b,
// // };
// // let d = c.apple * 4;

// // any

// let a: any = 666;
// let b: any = ["danger"];
// let c = a + b;

// // unknown

// let a: unknown = 30;
// let b = a === 123;
// let c = a + 10; // 객체의 타입이 unknown이다!
// if (typeof a === "number") {
//   let d = a + 10;
//   console.log(d); // 40
// }

// // boolean

// let a = true;
// let b = false;
// const c = true;
// let d: boolean = true;
// let e: true = true;
// let f: true = false; // true 타입에 false 할당 할 수 없음.

// // number

// let a = 1234;
// var b = Infinity * 0.1;
// const c = 5678;
// let d = a < b;
// let e: number = 100;
// let f: 26218 = 26218;
// let g: 26218 = 10;

// // bigint

// let a: bigint = 1234n;
// const b = 5678n;
// var c = a + b;
// let d = a < 1225;

// // stirng

// let a = "hello";
// let b = "billy";
// const c = "!";
// let d = a + " " + b + c;
// let f: "john" = "john";

// // 객체
// // object 내부에 b가 없다는 에러를 뱉음
// // object를 쓰는 이유는 any보다 조금 좁은 타입으로 객체라고 말해 줄 뿐이다.
// let a: object = {
//   b: "x",
// };

// // 객체 리터럴 문법을 활용해보자
// let a: { b: number } = {
//   b: 12,
// };

// let c: { firstName: string; lastNmae: string } = {
//   firstName: "john",
//   lastNmae: "barrownman",
// };

// class Person {
//   firstName;
//   lastName;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const matt = new Person("matt", "smith");

// console.log(matt);

// class Person {
//   constructor(public firstNmae: string, public lastName: string) {}
//   // public은 this.firstName = firstName을 단축한 것이다
// }

// let h = new Person("matt", "smith");

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(f(array[i]));
  }
  return result;
}

map([1, 2, 3], (i) => i * 2);
