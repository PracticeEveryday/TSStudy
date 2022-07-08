// | 연산자
// 유니온 연산자 특정 타입 하나의 타입 이상을 쓸 수 있게 만드는 것이 유니온 타입이다!!

type union = string | number;

// union type의 장점이다!!
const logMessage = (value: union): void => {
  console.log(value);
  if (typeof value === "number") {
    // 자연스럽게 value 가 number로 바뀐다
  } else {
    // 자연스럽게 string으로 바뀐다.
  }
  throw new TypeError("value must be string or number");
};

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // 공통 되는 것만 접근 가능!
  // someone.name;
  // someone.age;
  // someone.skill;
}
askSomeone({ name: "kim", age: 10 });
askSomeone({
  name: "lee",
  skill: "js",
});
// & intersection Type
let kim: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  // 모두 접근 가능
  someone.name;
  someone.age;
  someone.skill;
}
// developer person type 모두 가지고 있어야 됨
askSomeone2({
  name: "lee",
  age: 100,
  skill: "js",
});
