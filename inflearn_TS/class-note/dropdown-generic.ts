interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

interface ProjectNumber {
  value: number;
  selected: boolean;
}
const numberOfProducts: ProjectNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 배열의 두개 타입을 왔다 갔다 했더니 email 아이템 정의가 에러가 날 때도 안 날때가 있음.
function createDropdownItem(item: Email | ProjectNumber) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
// emails와 numberOfProducts 타입을 다 수용할 수 있는 타입을 정의해 줘야함..
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach((product) => {
  const item = createDropdownItem(product);
});

// Union 타입은 타입 정의에 대한 interface를 계속 만들어줘야함
// 동일안 속성들인데 속성 안의 타입이 바뀐다고 각각의 인터페이스를 계속 정의해줘야함 ㅠㅠ
// value 가 boolean이면?
interface TruFalse {
  value: boolean;
  selected: boolean;
}
