interface User {
  age: number;
  name: string;
}
// User라고 하는 것들을 User라는 인터페이스를 갖는다라고 함.
// 반복되는 타입을 인터페이스로 만들고 type을 넣어준다.
// 누구든 간에 User를 만들 때 age는 number 타입으로 name은 string 타입으로 사용할 수 있도록 상호간의 약속을 하는 것이다.

// User interface의 타입으로 정의할 수 있음
// 변수에 활용한 인터페이스
const seho: User = {
  age: 33,
  name: "seho",
};

// 함수의 인자 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
// User 인터페이스의 형식을 따르는 파라미터만 받아 사용하겠다는 것!!

const capt = {
  name: "캡틴",
  age: 100,
};

// 인자가 파라미터에 정의하는 interface에 잘 맞는지도 확인하는 것!!
getUser(capt);

// 함수의 스펙 ( 구조)에 인터페이스를 활용
// 함수의 전체적인 모습까지 인터페이스를 활용하여 정의할 수 있다.
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr2: StringArray = ["a", "b", "c"];
//arr2[0] = "b";

// 딕셔너리 패턴
// 객체의 index에 접근 할 때 interface로 잡을 수 있다!!
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj2: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
};

// 인터페이스 확장
// 이름과 나이를 가진 interface
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

// name, age, language 3가지 프로퍼티를 다 담아야 한다고 말함.
const captain: Developer = {
  language: "js",
  name: "kim",
  age: 100,
};
