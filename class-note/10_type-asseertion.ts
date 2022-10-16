//타입 단언
var someA;
someA = 20;
someA = 'a';
var someB = someA as string;
//개발자가 타입스크립트 추론대신에 타입을 단정해줌

//타입 단언으로 DOM API조작 예제
// <div id='app'>'hi'</div>
var div = document.querySelector('div');
if (div) {
  div.innerText;
}
