// enums 특정 값들의 집합을 의미하는 자료형
// ts는 문자열 숫자형 이넘을 지원함

// 시작은 0부터 이후 증가함!!
// 초기화 안하면 0 초기화 하면 그 숫자부터 시작
enum Shoes {
  Nike = 10,
  Adidas,
  Stn,
}

// 별도의 값을 지정하지 않으면 숫자형 이넘으로 간다!
let myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 enum
enum Shoes_str {
  Nike = "나이키",
  Adidas = "아디다스",
}

let myShoes_str = Shoes_str.Nike;

// 예제

enum Answer {
  Yes = "Y",
  No = "N",
}

const askQuestion = (answers: Answer) => {
  if (answers === Answer.Yes) {
    console.log("정답입니다.");
  } else if (answers === Answer.No) {
    console.log("오답입니다.");
  }
};
askQuestion(Answer.Yes);
// Yes도 안됨!! 무조건 enum 타입의 데이터만 들어와야 됨!!!
askQuestion("Yes");

askQuestion("예스");
askQuestion("y");
askQuestion("Yes");
