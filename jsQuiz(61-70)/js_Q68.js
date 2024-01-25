function solution(busTime, now){
    let answer = [];
    now = now.split(':').map(n => parseInt(n, 10));
    now = (now[0] * 60) + now[1];
    //시간에 60을 곱해서 분단위로 통일
    for (let i in busTime){
      let time = busTime[i].split(':').map(n => parseInt(n, 10));
      time = (time[0] * 60) + time[1];
  
      if (time < now){
        answer.push('지나갔습니다');
      } else{
        let hh = parseInt((time - now) / 60, 10);
        let mm = (time - now) % 60;
        answer.push(String(hh).padStart(2, 0) + '시간 ' + String(mm).padStart(2, 0) + '분');
      }
    }
    return answer;
  }
  
  console.log(solution(["12:30", "13:20", "14:13"], "12:40"));