// Intersection Types
// 교차
// and를 의미함!!

interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

// 이러면 모든 속성을 다 기입해 줘야함!!
// 여러 타입을 하나로 합쳐주는 아이!!
const ToyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "blue",
  price: 10000,
};
