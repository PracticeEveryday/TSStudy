class Person {
  // 미리 있어야함!
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logName(): string {
    return this.name;
  }
}

const capt = new Person("capt", 100);
console.log(capt);
