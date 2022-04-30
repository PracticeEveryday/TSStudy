function fetchItems(): string[] {
  var items = ["a", "b", "c"];
  return items;
}

let result = fetchItems();
console.log(result);

// 동기적인 코드에 한해서는 ts가 추론이 다 가능하다!!

function fetchItems2(): Promise<string[]> {
  // Promise<number[]> => error
  var items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve, reject) {
    resolve(items);
  });
  // Promise 반환하면 타입을잘 모른다고 함!!
  // fetchItems2를 실행 할 때 안의 비동기 실시를 어떻게 할지 알지 못한다.
  // so 기본적으로 generic 타입을 집어 넣어줘야함
  // 프로미스 안의 타입의 넣어줘야함!!
  // resolve된 값이 promise의 밸류가 될 것
}

fetchItems2();
