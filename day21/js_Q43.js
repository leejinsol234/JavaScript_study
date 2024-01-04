let a = prompt('10진수를 입력해주세요.')
let b = []; //나머지를 담을 변수
let result = ''; //이진수를 담을 빈 문자열

while (a){
	b.push(a % 2); //b에 입력받은 값을 2로 나누었을 때 나머지를 넣는다.
	a = parseInt(a / 2, 10); //a에 그 다음 나눌 10진수 정수를 담는다. a가 0이면 빠져나옴.
}
b.reverse(); //b에 담긴 나머지들을 역순으로 정렬

b.forEach((n) => { //역순으로 정렬된 배열 요소들을 문자열로 연결해서 담아준다.
  result += n;
})

console.log(result);