// 이넘
// 이넘은 특정 값들의 집합을 의미하는 자료형입니다.

enum Shoes {
  Nike,
  Adidas,
  Sth,
}

// 별도의 값을 주지 않으면 숫자형 enum으로 취급한다 => 0부터!
var myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum Name {
  Kim = "김",
  Lee = "이",
}

console.log(Name.Kim);

// 이넘 활용 사례

enum Answer {
  Yes = "Y",
  No = "N",
}

// enum에서 제공하는 데이터 형식 ( 값 )만 넣을 수 있다.
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
// 이렇게 들어가는 값이 다를 수 있는데 구체적인 값 하나로 통일 하는 역할을 할 수 있는 아이가 enum
askQuestion("예스");
askQuestion("y");
askQuestion("Yes");
askQuestion("Y");
askQuestion(Answer.Yes);
