const logMessage = (value: any): void => {
  value;
  console.log(value);
};

logMessage("hello");
logMessage(100);
// 배우지 않았으면 any로 해야함

// | 연산자!!
// 유니온 타입(Union Type) 특정 타입 하나의 타입 이상을 사용할 수 있게 도와주는 아이!
// 특정 파라미터나 변수에 한가지 이상의 변수를 쓰고 싶을 때 unon 타입을 쓴다
const logMessage = (value: string | number): void => {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
};

logMessage("hello");
logMessage(100);
let seho: string | number | boolean;

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
const askSomeone = (someone: Developer | Person): void => {
  // 또는!!! 이니까 뭐가 들어올 지 모름!!
  // union 타입을 선언했음에도 불구하고 skill, age 모든 속성에 접근이 안됨... name 만됨 ㅠㅠ
  // 왜? Developer도 되야되고 Person도 되야되는데 ts 관점에선 somone이 뭐가 들어올 지 모르기 때문에 somone의 skill, age를 타입 검증 없이 그냥 써버리게 되면 ts 스럽지 않고 에러가 날 수 있도록 생각하기 때문에 공통된, 보장된 속성만 제공한다!!
  // 만약 age skill을 쓰고 싶다면 특정 타입으로 제한한 다음에 사용 하면 된다. (type guard!)
  // 유니언 타입이라는 것이 인터페이스를 연결 했을 때 공통된 특징만 사용 할 수 있따는 것이 union 타입의 특징임!!
  someone.name;
  someone.age;
  someone.skill;
};

// 인터페이스라는 타입 구조체
// & intersection 타입
let kim: string | number | boolean;
let capt: string & number & boolean;

// 개발자에게 물어보거나 사람에게 물어보고 싶었는데 intersection은 개발자의 속성도 사람의 속성도 같이 가진 사람에게 물어보는 거니까
// 내가 알맞게 써야된다!
const askSomeone = (someone: Developer & Person): void => {
  // 이면서!! 니까 someone은 Developer Person 속성을 다 가지고 있다!!
  someone.name;
  someone.age;
  someone.skill;
};

const someone = (param: Developer | Person) => {};

// 둘다 넣을 수 있음
someone({ name: "디벨로퍼", skill: "웹개발" });
someone({ name: "캡틴", age: 1000 });

const someone2 = (param: Developer & Person) => {};

// 야 age도 내놔!!
someone2({ name: "디벨로퍼", skill: "웹개발" });
