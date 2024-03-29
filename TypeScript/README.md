# TypeScript Programming 책 학습

## 코드 스타일

- 세미콜론은 필요할 때만 사용했다.
- 들여쓰기는 공백 문제 네 개로 표현했다.
- 프로그램 일부를 간략히 보여주거나 세부 내용보다 프로그램 구조가 중요할 때는 a, f, \_ 등 간결한 변수명을 사용했다.

- 최신 자바스크립트 문법과 기능을 사용한다.
- 가능하면 스프레드 ( ... )를 활용하여 주료구조를 불변으로 만드는 것이 좋다.
- 명시적 타입을 너무 남용하지 않는다.

- 자바스크립트에는 포인터나 참조가 없다. 그 대신 값과 참조 타입을 사용한다.
- 이 책은 여러분이 전반적으로 타입스크립트 코드를 어떻게 구현해야 하는 지 그리고 왜 타협 대신 끝까지 원칙을 견지해야 하는지 설명한다.

1. npm init
2. npm install --save-dev typescript tslint @types/node

tslint 파일을 만드는 명령
./node_modules/.bin/tslint --init

tsc로 타입스크립트 컴파일
./node_modules/.bin/tsc
NodeJS로 실행
node ./dist/index.js

### 타입

- 값과 이 값으로 할 수 있는 일의 집합
- 어떤 값이 T타입이면, 이 값을 가지고 어떤 일을 할 수 있고 어떤 일을 할 수 없는지도 알 수 있다.

#### any 타입

any 타입은 뭐든지 할 수 있지만 꼭 필요한 상황이 아니라면 사용하지 않는 것이 좋다.
프로그래머와 타입스크립트 둘 다 타입을 알 수 없는 상황에서는 기본 타입인 any를 사용한다.
any는 가급적 사용하지 않는 것이 좋은데 타입이란 값과 값으로 수행할 수 있는 작업의 집합이라고 했다.
any는 모든 값의 집합이므로 모든 것을 할 수 있다.

any를 사용하면 타입 검사기라는 마법이 더 이상 작동하지 않으니 최후의 수단으로 사용하자.

any가 나타났을 때 예외를 일으키고 싶다면 noImplicitAny 플래그를 활성화 하자!

#### unknown

타입을 미리 알 수 없는 어떤 값이 있을 때 any 대신 unknown을 사용하자.
any처럼 unknown도 모든 값을 대표하지만, unknown의 타입을 검사해 정제(refine) 하기 전까지는 타입 스크립트가
unknown 타입의 값을 사용할 수 없게 강제한다.

unknown은 비교 연산 ( ==, ===, ||, &&, ?)과 반전 (!)을 지원하고 typeof, instanceof 연산자로 정제 가능하다.

- 타입스크립트가 무언가의 타입을 unknown이라고 추론하는 상황은 없다.
  unknown을 사용하기 위해서는 명시적으로 설정해야 한다.
- unknown 타입이 아닌 값과 unknown 타입인 값을 비교할 수 있다.
- unknown 값이 특정 타입이라고 가정하고 해당 타입에서 지원하는 동작을 수행할 수 없다.
  먼저 타입스크립트에게 해당 값이 특정 타입임을 증명해야 한다.

#### boolean

boolean 타입은 true(참) false(거짓) 두 개의 값을 갖는다.
이 타입으로는 비교 연산 (==, ===, ||, &&, ?)과 반전 (!) 연산을 할 수 있을 뿐 많은 연산을 지원하지 않는다.

##### 타입리터럴

오직 하나의 값을 나타내는 타입

#### number

number 타입은 모든 숫자(정수, 소수, 양수, 음수, Infinity, NaN)의 집합이다.

##### 숫자 분리자

긴 수자의 경우 숫자 분리자를 통해 읽기 쉽게 만들 수 있다. 숫자 분리자는 타입과 값에 모두 사용할 수 있다.
let oneMillion = 1_000_000 // 1000000과 같음
let twoMillion: 2_000_000 = 2_000_000

#### bigint

number은 2^53까지의 정수를 표현할 수 있지만 bigint의 경우 이보다 큰 수도 표현할 수 있다.

#### string

string은 모든 문자열의 집합으로 연결(+), 슬라이스(.slice) 등의 연산을 수행할 수 있다.

#### 객체

타입스크립트의 객체 (object) 타입은 객체의 형태(shape)을 정의한다.
객체 타입 만으로는 ({}) 등의 간단한 객체와 (new를 사용해 만든) 복잡한 객체를 구분할 수 없다.
이는 자바스크립트가 **구조 기반 타입**을 갖도록 설계했기 때문이다

##### 구조 기반 타입

구조 기반 타입화에서는 객체의 이름에 상관없이 객체가 어떤 프로퍼티를 갖고 있는지를 따진다.

객체 리터럴 문법 + object 명시 => 타입 스크립트가 c의 형태를 추론하게 하거나 중괄호 {} 안에서 명시적으로 타입을 묘사할 수 있다.

객체 리터럴 문법은 "이런 형태의 물건이 있어"라고 말한다. 이 물건은 객체 리터럴 또는 클래스 일 수 있다.

##### 확실한 할당 (definite assignment)
