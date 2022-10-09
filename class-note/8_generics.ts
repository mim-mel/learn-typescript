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
