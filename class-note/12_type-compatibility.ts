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

var empty1:Empty<string>;
var empty2:Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{

}