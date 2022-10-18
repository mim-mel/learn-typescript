//인터페이스에서의 타입 호환
interface Developer {
    name: string;
    skill:string;
}

interface Person {
    name:string;
}

var developer: Developer;
var person: Person;

developer = person; //developer가 더 많은 속성을 가지고 있기 때문에 동일할 수 없음. 
person = developer; //왼쪽 있는 변수의 타입이 오른쪽의 부분집합이기 때문에 지원이 가능함.


//함수에서의 타입 호환
let add = (a:number)=>{
    //
}

let some = (a:number, b:number)=>{
    //
}

add = some;
some = add;


//제네릭에서의 타입 호환
interface Empty<T>{
    //
}

let empty1:Empty<string>;
let empty2:Empty<number>;

// 인터페이스 값이 비어있기 때문에 제네릭 타입이 달라도 동일하게 처리됨
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data:T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

//data 값 안에 다른 제네릭 타입이 할당되었기 때문에 더이상 동일하게 처리되지 않음
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;


