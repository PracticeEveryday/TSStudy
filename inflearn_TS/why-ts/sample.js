// const sum = (a, b) => {
//   return a + b;
// };

// sum(10, 20);
// sum(10, "20"); // 1020

// let result = sum(10, 20);

// ts같은 효과를 줌
// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번쨰 숫자
 */
const sum = (a, b) => {
  return a + b;
};

sum(10, "20");
