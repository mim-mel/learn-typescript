//JS 문자열
var str = "hello";

//TS 문자열
let str2: string = "hello";

//TS 숫자
let num: number = 10;

//TS 배열
let arr: Array<number> = [1, 2, 3];
//let arr: number[] 로도 표기할 수 있음
let arr2: Array<string> = ["Captin", "Thor", "Hulk"];

//TS 튜플 - 모든 인덱스에 타입이 정의되어 있는 배열
let address: [string, number] = ["gangnam", 100];

//TS 객체
let obj: object = {};

let person: object = {
  name: "capt",
  age: 100,
};

let person2: { name: string; age: number } = {
  name: "capt",
  age: 100,
};

//TS 진위값
let show: boolean = true;
