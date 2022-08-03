// 두 커스텀 타입 Dog와 Fish 작성

class Dog {
  constructor(private name: string) {}

  public sayHello(): string {
    return "bowwow bowwow";
  }
}

class Fish {
  constructor(private name: string) {}

  public dive(howDeep: number): string {
    return `${howDeep}만큼 가능`;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet) {
  if (pet instanceof Dog) {
    console.log(pet.sayHello());
  } else if (pet instanceof Fish) {
    console.log("Fish cannot talk, sry");
  } else {
    return;
  }
}

const dog1 = new Dog("1");
const dog2 = new Dog("2");

const fish1 = new Fish("1");
const fish2 = new Fish("2");

talkToPet(dog1);
talkToPet(dog2);

talkToPet(fish1);
talkToPet(fish2);
