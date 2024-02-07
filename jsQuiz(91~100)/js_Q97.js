function sol(n, l){
    //n:택배원 수, l:택배들
        let answer = 0;
            //택배원 수 만큼의 배열 생성
        let man = new Array(n).fill(0);
        
        //모든 택배가 상차 되었을 경우 종료
        while (l.length !== 0){
          //택배원 수 만큼 반복
          for (let j = 0; j < man.length; j++){
            //택배원이 배달하고있는 택배의 잔여거리가 0인경우(배송완료인경우) 택배상차
            if (man[j] == 0 && l){
              man[j] += l.shift();
              //shift()는 배열의 첫번째 요소 삭제
              //다음 택배를 맡은 택배가 없는 배달원에세 배정
            }
          }
  
          //택배원들 배송거리 -1 처리
          man = man.map(x => x = x -1);
  
          //1회 반복당 1의 시간증가
          answer += 1;
        }
  
           
        answer += Math.max.apply(null, man); 
        //man에서 가장 큰 값(택배원들이 아직 배송해야 할 택배들 중에서 가장 많은 시간이 남은 택배)을 찾아 answer에 더해줌
        //택배원들이 아직 처리하지 않은 택배들 중에서 가장 많은 시간이 걸리는 택배를 추가적으로 처리하는 시간을 고려하여 전체 배송에 걸리는 시간을 계산하기 위함
  
        return answer;
  }
  
  const 배달원 = 3;
  const 택배 = [1, 2, 1, 3, 3, 3];
  
  console.log(sol(배달원, 택배));