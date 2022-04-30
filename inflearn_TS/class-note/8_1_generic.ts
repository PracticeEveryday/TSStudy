// 타입을 다르게 받기 위해 중복된 함수 코드들을 여러개 작성해야함 ㅠㅠ
// 가독성 및 유지보수 측면해서 불리해짐

function logText(text: string) {
  console.log(text);
  text.split(" ").reverse().join("");
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

// any 타입임
logText("a");
const num = logNumber(1);

// UNION 타입은 다 받을 수 있음!!
function logText2(text: string | number) {
  console.log(text);
  // text는 string과 number 동시에 사용할 수 있는 것만 사용할 수 있게됨.. 왜냐면 ts는 뭐가 들어올 지 모르니까 안된다고 함
  return text;
}

// input에 대한 문제점은 생기는데
const a = logText2("a");
// error => string | number의 타입은 split을 제공하지 않는다
// 반환 값에 대한 해결이 되지 않는다!! UNION type
a.split("");
console.log(a);
logText2(2);

// Generic
function logText3<T>(text: T): T {
  console.log(text);
  return text;
}

// string쓸거야! 호출 할 때 정함
const abc = logText3<string>("abc");
// 가능@!!
abc.split("");

// type 정의의 이점을 generic이 확실하게 가져갈 수 있게 도와준다!!
const login = logText3<boolean>(true);

// 함수를 정의 할 때 타입을 비워 놓고 함수를 정의 할 때 타입을 던져 주는 게 generic
// 타입을 추론 해서 반환 값까지 정해 줄 수 있는게 generic!!! 이니까

// 인터페이스에 제너릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}
// value에 넘버 안되...
const obj: Dropdown = { value: "10", selected: false };

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
// 특정 타입 하나를 줘야한다.
const obj2: Dropdown2<string> = { value: "10", selected: false };
const obj3: Dropdown2<number> = { value: 10, selected: false };
