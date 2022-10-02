// 자동으로 숫자형 값을 취급됨
enum Shoes {
  Nike,
  Adidas,
}

const myShoes = Shoes.Adidas;
console.log(myShoes);
// 콘솔창에 1이 나온다
// 별도의 값을 지정하지 않으면 enum의 값은 모두 숫자로 취급된다.

//문자형 이넘
enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스',
}

const myShoes2 = Shoes2.Adidas;
console.log(myShoes2);

//이넘의 활용법
enum Answer {
  Yes = 'Y',
  No = 'N',
}

const ask = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
};

ask(Answer.Yes);
ask('Y');
ask('Yes');
