// implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start = () => {
    console.log("go...");
  };
}

const B = new Bmw("green");
console.log(B);
console.log(B.start());

// interface 확장
// extends
// car의 속성을 가지고
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: "black",
  wheels: 4,
  start() {
    console.log("go...");
  },
  door: 4,
  stop: () => {
    console.log("stop");
  },
};

// extends는 여러개도 가능하다.

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
