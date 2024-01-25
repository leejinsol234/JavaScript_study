function solution(all, rule){
    let answer = [];
    for (let part of all){
      answer.push(check(part, rule));
    }
    return answer;
  }
  
  function check(part, rule){
    let temp = rule.indexOf(rule[0]); //임시 변수에 rule 문자열의 첫 번째 문자가 나오는 위치를 담음
    for (let str of part){
      if (rule.includes(str)){ //rule이 str을 포함하는지 판별하는 논리값
        if (temp > rule.indexOf(str)){ 
          return '불가능';
          //현재까지 확인한 문자들 중에서 더 앞서 나온 문자가 있다면 '불가능'을 반환하도록 함
        }
        temp = rule.indexOf(str);
      }
    }
    return '가능';
  }
  
  
  const all = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
  const rule = 'ABCD';
  
  console.log(solution(all, rule));
  //["가능", "불가능", "가능", "가능", "불가능"]