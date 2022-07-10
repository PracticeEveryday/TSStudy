// ES2015 (ES6 ) 최신 문법!

// class 예약어 + 식별자 + {} => 인스턴스를 만들어 주는 게 역할
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

const seho = new Person("세호", 30); // 생성 되었씁니다.

console.log(seho);

const admin = {};
console.log(admin.__proto__ === seho.__proto__);
console.log(admin.__proto__ === seho.__proto__.__proto__);
console.log(admin.__proto__);
console.log(seho.__proto__.__proto__);

const lee = { name: "lee" };
console.log(lee.__proto__);
admin.__proto__ = seho;
console.log(admin.name);

// 생성자 함수!
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person("캡틴", 100);
