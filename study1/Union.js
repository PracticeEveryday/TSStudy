"use strict";
// Union Types
// 통합
function getGift(gift) {
    // 둘다 color property가 있기에 color는 no error
    console.log(gift.color);
    // but Car만 start가 있어 error
    if (gift.name === "Car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
// 식별 가능한 Union 타입
