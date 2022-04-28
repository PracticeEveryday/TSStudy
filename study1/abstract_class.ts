// 추상 class

abstract class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void;
}

// 추상 클래스는 new를 이용해서 만들 수 없음
//const car = new Car("red")

// 상속을 통해서만 사용이 가능함
// 추상 클래스 내의 추상 메서드는 상속 받은 쪽에서 무조건 구체화를 해줘야 한다.!!
// 추상 클래스란 클래스에서 틀만 만들어주고 구체적인 것은 상속 받는 클래스 내에서 구체화 해주는 것을 말한다.
// 상속 받는 클래스는 가지각색 이지만 내용은 다를 수 있다는 거다!!
class BMW extends Car {
  constructor(color: string) {
    super(color);
  }
  doSomething(): void {
    console.log("do!!");
  }
}

const z4 = new BMW("black");
