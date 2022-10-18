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

interface DetailDropdown<K> extends Dropdown2<K> {
  description: string;
  tag: K;
}

var shoppingItem2: DetailDropdown<string> = {
  value: 'abc',
  title: 'hello',
  description: 'a',
  tag: 'div',
};

// Best Common Type = 가장 근접한 타입을 추론함
var arr1 = [1, 2, true, true, 'a'];
