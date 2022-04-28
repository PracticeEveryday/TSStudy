interface Add {
  (num1: number, num2: number): number; // 매개변수 + 반환값의 데이터 타입 지정!!
}

// add라는 함수를 Add 인터페이스를 사용해 만들어 주겠다.
const cal: Add = function (x, y) {
  return x + y;
};

interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(33); // true
