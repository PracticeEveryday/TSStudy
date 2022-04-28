// Literal Types
// 정확한

// 문자열 리터럴 타입 => 바뀔 수 없음.
const userName1 = "Bob"; // 변할 수 있으니 온리 Bob

let userName2 = "tome"; // 보다 넓은 string

// error
//userName2 = 3

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "teacher",
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}
