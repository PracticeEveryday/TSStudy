// Union Types
// 통합

interface Car {
  name: "Car";
  // 이건 literal한 Car 타입니다!! string 타입 아니다!! const 라고 생각해라 못 바꾸니까 그냥 Car 라는 문자 타입
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  // 이건 literal한 mobile 타입니다!! string 타입 아니다!! const 라고 생각해라 못 바꾸니까 그냥 mobile 라는 문자 타입
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  // 둘다 color property가 있기에 color는 no error
  console.log(gift.color);
  // but Car만 start가 있어 error
  if (gift.name === "Car") {
    gift.start();
  } else {
    gift.call();
  }
}
// 식별 가능한 Union 타입
