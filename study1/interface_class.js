"use strict";
// implements
class Bmw {
    constructor(c) {
        this.start = () => {
            console.log("go...");
        };
        this.color = c;
    }
}
const B = new Bmw("green");
console.log(B);
console.log(B.start());
const benz = {
    color: "black",
    wheels: 4,
    start() {
        console.log("go...");
    },
    door: 4,
    stop: () => {
        console.log("stop");
    },
};
