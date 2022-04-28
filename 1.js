const add = (num1, num2) => {
  console.log(num1 + num2);
};

add();
add(1);
add(1, 2);
add(3, 4, 5);
add("hello", "world");

const showItems = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

showItems([1, 2, 3]);
// showItems(1, 2, 3); => Error

/*
  JavaScript(동적언어)
  => 런타임에 타입 결정 / 오류 발견
  
  Java, TypeScript(정적언어) 
  => 컴파일 타임에 타입 결정 / 오류 발견
*/
