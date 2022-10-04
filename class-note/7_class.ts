class Person2 {
  //class상단에 미리 정의 해줘야된다.
  //private, public, readonly(접근만 할 수 있고 값을 변경할 수는 없다)으로 변수의 접근 범위까지 지정해 줄 수 있다.
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
