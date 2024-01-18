function solution(n){
    let person = 0; //사람
    let total = 0; //총 악수 횟수
    let temp = 0;
    while(true){
        total = parseInt((person*(person-1))/2, 10); 
        //참여한 사람들이 각자 자신을 제외한 모든 사람과 악수한 총 횟수
      if(n < total){ //입력한 악수 횟수가 총 악수 횟수보다 작으면
        break;
      }
      temp = total; //임시 변수에 total 대입
      person += 1; //사람 1 증가
    }
    return [parseInt(n-temp, 10), person];
  }
  
  const count = 59; //악수 횟수
  console.log(solution(count));