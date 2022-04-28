// class Car {
//    ts에서 class를 작성할 때 맴버 변수는 미리 선언해 줘야함.
//    color: string;
//   constructor(public color) {
//     this.color = color;
//   }
//   start() {
//     console.log("start");
//   }
// }

// 접근 제한자(Acess modifier) - public, private, protected

// public  자식 클래스나 클레스 인스턴스에서 접근 가능 아무것도 안쓰면 public
// private === 앞에 # 자식 클래스 내에서 사용 불가
// protected : 자식내부에서는 접근 가능 but 자식 class 인스턴스에서는 접근 불가능
class Car {
  name: string = "car"; // car class 내에서만 사용 가능
  // #name : string
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels);
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw("black");
console.log(Car.wheels);
z4.showName();

/*
  public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
  protected - 자식 클래스에서 접근 가능 => 인스턴스 불가능
  private - 해당 클래스 내부에서만 접근 가능

  static - 정적 멤버 변수를 만들 수 있음 그럼 class.으로 접근 가능
*/
