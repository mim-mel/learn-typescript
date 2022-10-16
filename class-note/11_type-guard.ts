interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
    return {name:'Tony', age:33, skill: 'Iron Making'}
}

var tony = introduce();
console.log(tony.skill); //skill이 있음에도 불구하고 skill 속성이 없다고 찍힌다 => 유니온 타입 때문에 공통된 속성에만 접근할 수 있기 때문이다.


//타입단언을 통해 값에 접근하는 예시
if((tony as Developer).skill){
    console.log((tony as Developer).skill);
}else((tony as Person).age){
    console.log((tony as Person).age);
}

//타입가드를 통해 값에 접근하는 예제
const isDeveloper = (target : Developer | Person): target is Developer=>{
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    console.log(tony.skill);
} else{
    console.log(tony.age);
}