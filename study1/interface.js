"use strict";
// let user: object;
let user = {
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
