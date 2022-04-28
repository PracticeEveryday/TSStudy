import res from "express/lib/response";

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const noReturn = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

const IsAdult = (age: number): boolean => {
  return age > 19;
};

// interface 처럼 함수의 매게 변수도 optional하게 지정 할 수 있다.

// name이 없을 때를 대비한 코드도 있지만 Ts는 좀 더 명시적으로 해줘야 한다.
// 선택적 매개변수 있으면 string 없으면 undefined 항상 둘 중 하나!
const hello = (name?: string) => {
  return `Hello, ${name || "world"}`;
};
// default 값주는 걸로 동일하게 사용 가능!!
const hello_ver2 = (name = "world") => {
  return `Hello, ${name}`;
};

const result = hello();
const result2 = hello("sam");
// const result3 = hello(123); => error

/*
error => 옵셔널한 값은 무조건 뒤로 가야함!! 앞으로 오면 에러!
const hello_age = (age?: number, name: string): string => {
  if (age !== undefined) {
    return `Hello ${name}. You are ${age}`;
  } else {
    return `Hello ${name}`;
  }
};
너무 앞에 쓰고 싶다?
const hello_age = (age: number | undefined, name: string): string => {
  if (age !== undefined) {
    return `Hello ${name}. You are ${age}`;
  } else {
    return `Hello ${name}`;
  }
};
console.log(hello_age(undefined, "Sam"))
undefined를 명시적으로 주고 사용해야함
*/
const hello_age = (name: string, age?: number): string => {
  if (age !== undefined) {
    return `Hello ${name}. You are ${age}`;
  } else {
    return `Hello ${name}`;
  }
};

// rest parameter 나머지 매개 변수
// ... 을 통해 전달받은 매개 변수를 배열로 사용할 수 있게 해줌
const rest = (...nums: number[]) => {
  return nums.reduce((result, num) => result + num);
};

rest(1, 2, 3); //6
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

interface User {
  name: string;
  age?: number;
}

const Sam: User = { name: "Sam" };

// this 의 타입을 주고 싶으면
// 화살표 함수에는 this를 사용할 수 없음!!
// const showName = (this: User) => {
//   console.log(this.name);
// }; => error

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");

function join(name: string, age: number): User; // sam의 에러가 사라짐
function join(name: string, age: string): string; // jaon의 에러가 사라짐
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}

// 여기서는 join의 리턴값이 뭘로 반환 해야 되는 지 모름 ts가 so 이땐 overloading을 사용해야함.
// 동일한 함수이지만 매개 변수의 타입에 따라 반환되어야 하는 리턴 값의 타입도 달라진다면 overloading을 통해 해결 할 수 있다.
const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");
