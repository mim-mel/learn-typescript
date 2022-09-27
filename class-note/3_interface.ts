interface User{
    age: number;
    name: string;
}

//변수에 인터페이스 활용
var seho: User = {
    age:33,
    name: '세호',
}

//함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}

const cap = {
    age: 100,
    name: '캡틴',
}

getUser(cap);

//함수의 스팩(구조)에 인터페이스 활용
interface Sumfunction{
    (a:number, b:number):number;
}

const sum: Sumfunction = (a:number, b:number)=>{
    return a+b;
}