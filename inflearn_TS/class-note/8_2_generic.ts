// 제너릭의 타입 제한
function logTextLength<T>(text: T): T {
  // generic을 해놨지만 ts가 선언 할 때 string이 올지 뭐가 올지 어케암?
  // 정의 해야하는데 그래서 이렇게만 하면 length는 에러가 뜬다
  console.log(text.length);
  return text;
}
logTextLength("hi");

// 제너릭인데 배열이 올거야!
// 함수 안에서는 제너릭 타입이 배열이라는 것을 알고 array API를 제공해 준다!!
// 제너릭의 타입의 힌트를 추가적으로 줄 수 있다!!
function logTextLength2<T>(text: T[]): T[] {
  // so 좀 범위를 줄여 줘야함
  console.log(text.length);
  text.forEach((item) => {
    console.log(item);
  });
  return text;
}

logTextLength2(["hi", "hello", "안녕"]);

// 제너릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// extends 이미 정의된 타입을 확장해서 쓸 때 사용한다.
function logTextLength3<T extends LengthType>(text: T): T {
  // 제너릭의 타입은 LengthType의 하위가 될 것이다!
  text.length;
  return text;
}
// 문자열은 length라는 속성이 제공 된다!
logTextLength3("a");
// 숫자 10은 length가 없어서 안됨!!
logTextLength3(10);
logTextLength3({ length: 10 });
logTextLength3({ lengt: 10 });

// 제너릭 타입 제한 3 - keyof

interface ShoopingItem {
  name: string;
  price: number;
  stock: number;
}

// Shopping 아이템 키 값들 중 하나로 줘야한다.
// name, price, stock 만들어 갈 수 있겠지
function getShoppingItemOption<T extends keyof ShoopingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption("a");
getShoppingItemOption("name");
