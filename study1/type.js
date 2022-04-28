"use strict";
let car = "bmw";
car = "benz";
let age = 30;
let isAdult = true;
let a = [1, 2, 3];
let week1 = ["mon", "tue", "wed"];
let week2 = ["mon", "tue", "wed"];
// 튜플 (Tuple)
// 배열의 첫번째 요소는 string 두번째 요소는 number라는 뜻
let b;
b = ["a", 1];
// b = [1, 'a'] error
b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase(); error
// void 함수에서 아무것도 반환하지 않을 때 사용
const sayHello = () => {
    console.log("Hello");
};
// never 통상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용할 수 있다.
const showError = () => {
    throw new Error();
};
const infLoop = () => {
    while (true) {
        // do something....
    }
};
// enum 비슷한 값들끼리 묶어준 것
/*
자동으로 0 ,1 ,2 할당
enum Os {
  Window,
  Ios,
  Android
}
3부터 시작
enum Os {
  Window = 3,
  Ios,
  Android
}
 */
var test;
(function (test) {
    test[test["Window"] = 3] = "Window";
    test[test["Ios"] = 10] = "Ios";
    test[test["Android"] = 11] = "Android";
})(test || (test = {}));
console.log(test["Ios"]);
// 문자값도 입력 가능
var OS;
(function (OS) {
    OS["Window"] = "win";
    OS["Ios"] = "ios";
    OS["Android"] = "and";
})(OS || (OS = {}));
/*
  이 코드는 결국 이 코드로 컴파일 된다는 뜻임
  const OS = {
    Window : 'win',
    Ios : 'ios',
    Android : 'and
  }
*/
// 특정 값만 입력 할 수 있게 강제하고 싶을 때 그 값들이 공통점이 있을 때 사용하자
let myOs;
myOs = OS.Window;
// null, undefined
let c = null;
let d = undefined;
