function doong(r, j){
    let answer = [];
    //토끼의 마릿수만큼 pass로 answer 배열 채우기
    for(let i=0; i<j.length; i++){
      answer.push('pass');
    }
  
    //토끼가 모두 건널 동안
    for(let i=0; i<j.length; i++) {
      let p = 0;
      //p가 돌의 개수에서 1을 뺀 값보다 작을 동안
      while (p < r.length-1){
        p += j[i]; //토끼의 점프력을 담아서
        r[p-1] -= 1; //점프력에 따라 착지한 돌의 내구도를 1씩 감소
  
        if (r[p-1] < 0){ //돌의 내구도가 0보다 작아지면
          answer[i] = "fail"; //해당 토끼의 통과 여부를 fail로 변경
        }
      }
    }
  
    return answer;
  }
  
  const rock = prompt('돌의 내구도').split(' ').map(n => parseInt(n, 10));
  const jump = prompt('토끼의 점프력').split(' ').map(n => parseInt(n, 10));
  
  console.log(doong(rock, jump));