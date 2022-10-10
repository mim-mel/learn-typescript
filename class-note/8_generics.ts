//제네릭을 이용해서 타입을 선언하는 방법
const logText = <T>(text: T): T => {
  console.log(text);
  return text;
};

//함수를 호출해서 사용할 때 함수타입을 어떻게 사용할지 제네릭으로 선언해서 사용한다.
//장점1. 타입을 그때 그때 필요에 따라 다르게 정의할 수 있다(ex- union타입은 타입을 미리 정의해야하기 때문에 내장 함수 사용 등에 제약이 많다)

//변수 str의 타입도 제네릭에 따라 스트링이 된다.
const str = logText<string>('hi');
str.split('');

const flag = logText<boolean>(true);

//일반적인 인터페이스
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = {
  value: 10,
  selected: false,
};

//인터페이스에 제네릭을 선언하는 방법
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown2<number> = {
  value: 10,
  selected: false,
};

//제네릭의 타입제한
const logTextLength = <T>(text: T[]): T[] => {
  //이 스코프 안에서는 logTextLength안에 어떤값이 들어올 지 알 수 없음. 그래서 제네릭 옆에 []을 추가하므로 힌트를 줘야함
  console.log(text.length);

  return text;
};

logTextLength(['hi', 'hello']);

//제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

const logTextLength2 = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
};

logTextLength2('a');
logTextLength2(10); //string타입처럼 기본적인 length를 제공하지 않기 때문에 에러가 난다.

//제네릭 타입제한3  - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

//ShoppingItem interface의 요소 중 하나만 받겠다고 제한할 수 있다.
const getShoppingItemOption = <T extends keyof ShoppingItem>(
  itemOption: T
): T => {
  return itemOption;
};

getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');
