const logMassage = (value: any) => {
  console.log(value);
};

logMassage('hello');
logMassage(100);
logMassage(false);

//유니온 타입(하나의 타입 이상을 쓸 수 있게 해줌)
const logMessage2 = (value: string | number) => {
  //타입가드
  if (typeof value === 'number') {
    value.toLocaleString();
    //value에 대한 속성들을 바로 사용할 수 있게됨
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
};

logMessage2('hello');
logMessage2(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  someone.name;
  //someone에 어떤값이 들어올지 모르기 때문에 Developer와 Person의 공통요소인 name에만 접근할 수 있다.
  someone.age;
  //공통요소가 아닌 다른 요소에도 접근하기 위해서는 타입가드를 적용해 줘야 한다.
  someone.skill;
};

//실무에서 더 많이 쓰임.
askSomeone({ name: 'minsu', skill: '웹 개발' });
askSomeone({ name: 'minsu', age: 27 });

//인터섹션 타입
//&으로 들어가는 모든 조건을 만족해야 한다
const askSomeone2 = (someone: Developer & Person) => {
  //타입가드가 필요없음
  someone.name;
  someone.age;
  someone.skill;
};

//Developer와 Person의 모든 객체들을 가지고 있어야 한다
askSomeone2({ name: 'minsu', skill: '웹 개발', age: 27 });
