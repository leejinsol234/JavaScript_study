const scores = prompt('점수입력').split(' ').map(function(n){
    return parseInt(n, 10); //공백을 기준으로 분리한 배열의 각 문자열을 정수로 변환(map)
  });
  
  scores.sort((a, b) => {
    return a-b;
    //화살표 함수로 배열을 오름차순 정렬
  });
  
  let count = 0;
  let arr = [];
  
  while (arr.length < 3) { //??
    let n = scores.pop(); //pop(): 배열의 마지막 요소를 잘라내어 반환
    if (!arr.includes(n)){
      arr.push(n);
    }
    count += 1;
  }
  
  console.log(count);
