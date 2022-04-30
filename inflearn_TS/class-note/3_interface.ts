// User라는 인터페이스의 타입이 정의되었다.

interface User {
  age: number;
  name: string;
}

// seho는 User라는 인터페이스를 갖는다
// 오탈자가 나더라도 User라는 인터페이스의 규칙을 사용 할 수 있도록 약속 할 수 있다.
// User라는 interface는 age와 name을 무조건 갖고 있는 객체이다!!

// 변수에 인터페이스 활용
let seho: User = {
  age: 30,
  name: "seho",
};

// 함수에 인터페이스(상호간의 약속) 활용
// 특정 형식을 유지하는 데이터만 받겠다
const getUser = (user: User): void => {
  console.log(user);
};
const capt = {
  name: "캡틴",
  age: 20,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;

// 함수의 전체적인 모습까지 인터페이스를 만들 수 있다!!
sum = (a: number, b: number): number => {
  return a + b;
};

// 인덱싱
// 속성을 주고 타입을 정하는 것과 달리
// 속성 이름이 정해져 있지 않고 임의로 부여해서 만들 수 있는 방식!
// index는 항상 숫자다 근데 그 순서의 값이 스트링이다!!
// 접근 하는 방식 -> 인덱스 (순서) => 접근해서 나오는 값이 string이다!! 배열안에 들어가는 타입이 모두 string이다
// 인덱싱 방법도 인터페이스로 사용할 수 있다.
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c", "d", "e", "f"];

arr[0] = "d"; // 'a'

// 딕셔너리 패턴

interface StringRegexDictionary {
  [key: string]: RegExp;
  // RegExp 정규표현식 생성자 예약어!
  // 속성(프로퍼티) 타입의 스트링
}
let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.fs$/,
};

Object.keys(obj).forEach((value) => {});

// oop!,
// 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

// 확장 전까지 다 입력해 주어야한다.
interface Devloper extends Person {
  language: string;
}

let captain: Devloper = {
  language: "ts",
  age: 100,
  name: "캡틴",
};
