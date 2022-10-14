//타입 추론 기본
var a = 10;

const getB = (b = 10) => {
  var c = 'abc';
  return b + c; //리턴값이 String으로 됨 10 +'10' = '1010'
};

//타입 추론 기본2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
};

//타입 추론 기본3
interface Dropdown2<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown2<string> = {
  value: 'abc',
  title: 'hello',
};
