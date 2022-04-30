//내가 타입 만들기

// person이라는 interface를 이용했다고 나옴
// interface Person {
//   name: string;
//   age: number;
// }

// person의 타입의 모습이 어떻게 되는 지 바로 보여줌!! hover 보여지는 모습이 다르다!!
// 타입에 대한 별칭을 주는 것
type Person = {
  name: string;
  age: number;
};

let seho: Person = {
  name: "seho",
  age: 22,
};

// type 은 어느 곳에서나 다 쓸 수 있다!
type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
// 길어지니까 type 별칭을 써서 줄여서 쓸 수 있따!
const getTodo = (todo: Todo) => {};

// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의된 타입에 대해 나중에 참고 할 수 있게 이름을 부여해 주는 것과 같다.
// 이러한 특징은 VSCode preview의 상태로 다른 타입과 어떤 차이점이 있는지 확인 할 수 있다.

// interface Developer
// type Developer = { name : string, age : number}

// interface는 확장이 가능 한데 type은 확장이 불가능 하다 그러니 가능한 type 보다는 interface를 쓰자!
