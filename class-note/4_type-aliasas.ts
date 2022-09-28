interface Person {
    name:string;
    age:number;
}

type Person2 = {
    name:string;
    age:number;
}

var seho: Person2 = {
    name:'세호',
    age:30,
}

type MyString = string;
var str:MyString = 'minsu';

type Todo = {
    id: string;
    title: string;
    done: boolean;
}

const Todo = (todo:Todo)=>{
 
}

//타입과 인터페이스의 가장 큰 차이점은 확장 가능/불가능 여부입니다.
//인터페이스는 확장이 가능하지만 타입 별칭은 확장이 불가능합니다.
//따라서, 가능한 타입보다는 인터페이스로 선언해서 사용하는 것이 좋습니다. 