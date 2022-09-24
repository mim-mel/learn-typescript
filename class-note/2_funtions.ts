// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function sum2(): number {
  return 10;
}

//함수의 타입을 정의하는 방식
function sum3(a: number, b: number): number {
  return a + b;
}

//함수의 옵셔널 파라미터
//어쩔 때는 인자를 더 적거나 더 많이 넘기고 싶다거나 인자를 string이 아닌 number 등으로 넘기고 싶을 때
function log(a: string, b?: string, c?: string) {}

log("hello", 20);
