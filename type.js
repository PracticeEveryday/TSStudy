var car = "bmw";
car = "benz";
var age = 30;
var isAdult = true;
var a = [1, 2, 3];
var week1 = ["mon", "tue", "wed"];
var week2 = ["mon", "tue", "wed"];
// 튜플 (Tuple)
// 배열의 첫번째 요소는 string 두번째 요소는 number라는 뜻
var b;
b = ["a", 1];
// b = [1, 'a'] error
b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase(); error
// void 함수에서 아무것도 반환하지 않을 때 사용
var sayHello = function () {
    console.log("Hello");
};
// never 통상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용할 수 있다.
var showError = function () {
    throw new Error();
};
var infLoop = function () {
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
var Os;
(function (Os) {
    Os[Os["Window"] = 3] = "Window";
    Os[Os["Ios"] = 10] = "Ios";
    Os[Os["Android"] = 11] = "Android";
})(Os || (Os = {}));
console.log(Os["Ios"]);
// 문자값도 입력 가능
var OO;
(function (OO) {
    OO["Window"] = "win";
    OO["Ios"] = "ios";
    OO["Android"] = "and";
})(OO || (OO = {}));
/*
  이 코드는 결국 이 코드로 컴파일 된다는 뜻임
  const OS = {
    Window : 'win',
    Ios : 'ios',
    Android : 'and
  }
*/
// 특정 값만 입력 할 수 있게 강제하고 싶을 때 그 값들이 공통점이 있을 때 사용하자
var myOs;
myOs = OO.Window;
// null, undefined
var c = null;
var d = undefined;
