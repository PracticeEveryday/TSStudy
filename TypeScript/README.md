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
