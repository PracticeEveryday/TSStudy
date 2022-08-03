class Car {
  constructor(public name: string) {}
  public speed: number = 0;
  public honk(): void {
    console.log("부우우웅");
  }

  public accelerate(speed: number): void {
    this.speed += speed;
  }
}

const benz: Car = new Car("Benz");

benz.honk();
console.log(benz.speed);

benz.accelerate(10);
console.log(benz.speed);
