function Person(name, age) {
  this.name = name;
  this.age = age;
}

var mimmel = new Person('밈멜', 26);

// ES2015(ES6)

class Person {
  //클래스 로직
  constructor(name, age) {
    //초기화 매소드
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
  }
}

var minsu = new Person('민수', 27);
//constructor안에 있는 로직이 실행됨

console.log(minsu);
