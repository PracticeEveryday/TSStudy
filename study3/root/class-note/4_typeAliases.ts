// string 타입을 사용할 때
const name: string = "capt";

// 타입 별칭을 사용할 때
// 타입을 정의할 수 잇는 모든 곳에 별칭을 붙일 수 있다!!
type MyName = string;
const name1: MyName = "capt";

// 타입 별칭은 type이라는 키워드를 사용하고
// type Persons = {name: string, age: number} 이렇게 전체로 다보임
// type Persons = {
//   name: string;
//   age: number;
// };

// interface
// interface Person 안에 어떻게 이루어져 있는 지는 안 보여줌
interface Persons {
  name: string;
  age: number;
}

const seho2: Persons = {
  name: "세호",
  age: 30,
};

// 타입을 변수에 정의 할 때 길어지는 것을 별칭으로 활용하면 쉽게 타입 정의 가능 + 코드 가독성 높아짐!!
type Todo = { id: string; title: string; done: boolean };

function getTodo(todo: Todo) {}

// 타입은 확장이 되지 않고 인터페이스는 확장이 가능하다!!
