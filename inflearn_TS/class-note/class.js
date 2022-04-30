// ES2015 (ES6)부터 생긴 아이!
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}
// 인스턴스를 만들어 주는 게 class
let seho = new Person("세호", 30);
console.log(seho);

// prototype
let user = { name: "capt", age: 100 };
let admin = {};
// prototype : 원래의 형태 또는 전형적인 예, 기초 또는 표준
admin.__proto__ = user;
// 프로토 타입의 상위에 user 객체를 줌.. 그럼 admin의 속성을 내려 받아 재사용 가능 함.
// 내려받는다! 상속!!
// admin의 정보는 없어서 빈 객첸데 proto로 올라가보면 name과 age가 있다.
console.log(admin);
console.log(admin.__proto__);

admin.role = "admin";
console.log(admin);
// Built in JavaScript AIP 또는 JavaScript Native API

// 클래스란 내부적으로 돌았을 때 어떤 결과?
// 클래스는 원래 있었던 내용을 보기 쉽게 만든 것 문법을 만든 것
// 이것이 생성자 패턴을 쓴 것을 쉽게 보여주는 것

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person("캡틴", 100);
// 상위 문법과 아래문법은 완전 동일하다
// 원래 생성자 함수로 다 만들 수 있었는데 쉽게 하기 위해 calss 문법을 만든 것이다!!
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var capt = new Person("캡틴, 100");
