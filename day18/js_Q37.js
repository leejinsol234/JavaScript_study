const array = prompt("뽑힌 후보의 이름을 입력하세요.").split(" ");
let result = {};
let winner = "";

for(let index in array){
  let val = array[index]; //array 배열을 순회하면서 입력받은 이름들을 val에 담는다.
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
  //등록되어 있지 않으면 새로운 속성으로 추가 및 1로 초기화하고 이미 등록되어 있다면 해당 속성의 값을 1 증가
  //{원범:2, 혜원:3, 유진:1}
}

winner = Object.keys(result).reduce(function(a, b){
//Object 생성자의 keys()메서드: 인수로 지정한 객체가 소유한 열거 가능한 프로퍼티 이름을 배열로 반환한다.
//reduce 함수는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하면서 하나의 값으로 줄여나간다.
  return result[a] > result[b] ? a : b
  //a와 b를 비교해서 더 많은 표를 받은 후보를 반환하는 콜백 함수
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);