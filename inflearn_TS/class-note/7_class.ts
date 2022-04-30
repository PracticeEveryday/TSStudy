// 타입스크립트에서 클래스

class Person {
  // ts에서는 클래스에서 사용할 멤버 변수를 최상위에 먼저 정의해 주어야 한다.
  // class 안에서만 쓰겠다? private
  private name: string;
  // 변수에 접근하는 방법
  public age: number;
  // 접근만 가능하다!
  readonly log: string;

  // constructor에 파라미터도 구체적인 타입 줄 수 있다.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
