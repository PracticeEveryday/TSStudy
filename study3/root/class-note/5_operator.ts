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
