// let user: object;

// user = {
//   name: "xx",
//   age: 30,
// };
// console.log(user.name);
// property를 사용해 객체를 사용할 때는 interface를 사용해야함!!

// 성적은 사실 스트링으로 받기 범위가 너무 방대함 이럴 때 사용하는 게 문자열 리터럴 타입
type Score = "A" | "B" | "C" | "F";
interface User {
  name: string;
  age: number;
  gender?: string;
  // ?를 통해 젠더는 있어도 되고 없어도 되는 아이로 바뀐 것임!!
  // 근데 있을 땐 무조건 string이여야 함!!
  readonly birthYear: number;
  // 읽기만 가능 수정 불가
  // 최초에 생성할 때만 할당 가능 하고 이후엔 수정 할 수 없음!!
  [grade: number]: Score;
  // number를 키로하고 string을 밸류로 받는 프로퍼티를 여러개 받을 수 있다.
  // [grade: number]: string;
  // 이젠 string이 아니라 Score 내의 값만 받을 수 있음
}
let user: User = {
  name: "xx",
  age: 30,
  birthYear: 2000,
  1: "A",
  2: "B",
};
user.age = 10;
user.gender = "main";
// user.birthYear = 1990; error

console.log(user.name);

/*
  만약 유저에 학년별 성적을 주고 싶은데
  그렇게 할려면
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  1 : string
  2 : string
  3 : string
  4 : string
}
이렇게 줘야 겠지? 근데 1학년만 주고 싶으니 다 옵셔널 퀘스전 주는 것임
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  1? : string
  2? : string
  3? : string
  4? : string
}
이 때 쓰는 게 문자열 인덱스 설명을 주자!
*/
