function solution(n){
    let answer = '1';
  
    if(n === 1){
      return 1;
    }
  
    for (let i = 1; i < n; i++){
      answer = rule(answer);
    }
  
    return answer;
  }
  
  function rule(answer){
    let answerMax = 9;
    let result = '';
  
    for (let i = 1; i < answerMax; i++){
      let re = new RegExp(i, 'g');
      let count = (answer.match(re) || []).length;
      //match 메서드의 반환값이 null일 수 있으므로 null을 반환할 경우에 빈 배열을 사용하도록 한다.
      if(count >= 1){
        result = result + String(i) + String(count);
        //현재까지 구해진 "count"
      } 
    }
    return result;
  }
  
  const user_input = 7;
  console.log(solution(user_input));