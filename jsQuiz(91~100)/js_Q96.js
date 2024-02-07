const garden = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]];
  
  function solution(garden){
    const width = garden[0].length; //너비는 첫 번째 행의 길이와 같다.
    const height = garden.length; //높이 -> 행의 수와 같다.
  
    let garden_sum = []; //만들 텃밭을 garden과 똑같은 크기로 0으로 채운다
    for (let i=0; i<garden.length; i++){
        garden_sum.push(Array(garden.length).fill(0));
    }
  
    for(let i=0; i<height; i++){ //garden의 행부터 돌면서
      for(let j=0; j<width; j++){ //한 행에서 열들을 순회
        if (garden[i][j] == 0){ //garden의 요소가 0이면
            garden_sum[i][j] = 1; //만들 텃밭의 요소를 1을 대입
        } else { //garden의 요소가 0이 아니면
            garden_sum[i][j] = 0; //만들 텃밭의 요소에 0을 대입
        }
      }
    }
  
    //만들어진 텃밭을 순회
    for(let i=1; i<height; i++){ 
      for(let j=1; j<width; j++){
        if (garden_sum[i][j] == 1){ //요소가 1일 때
          //현재 위치에서 주변 위치의 값들 중 가장 작은 값을 담을 변수 min 선언
          let min;
          //같은 열의 바로 위에 있는 요소 값이 현재 위치에서 한 칸 왼쪽에 있는 요소 값보다 크면
          if(garden_sum[i-1][j] > garden_sum[i][j-1]){
            //min에 현재 위치에서 한 칸 왼쪽에 있는 요소 값을 담고
            min = garden_sum[i][j-1];
            //현재 위치에서 위로 한 칸, 왼쪽으로 한 칸 이동한 위치의 값이 현재 위치에서 바로 위, 같은 열에 있는 값보다 크면
          } else if (garden_sum[i-1][j-1] > garden_sum[i-1][j]) {
            //min에 현재 위치에서 바로 위, 같은 열에 있는 값을 담고
            min = garden_sum[i-1][j];
          } else {
            min = garden_sum[i-1][j-1]
          }
          //현재 위치 값을 업데이트
          garden_sum[i][j] = min + 1;
        }
      }
    }
  
    let maxValue = 0;
    let x = 0;
    let y = 0;
  
    for (let i=0; i<height; i++){
      for (let j=0; j<width; j++){
        if (maxValue < garden_sum[i][j]){
          maxValue = garden_sum[i][j]
          x = i
          y = j
        }
      }
    }
  
    // console.log(maxValue, x, y);
    console.log(maxValue, 'X', maxValue);
  
    for(let i=x - (maxValue - 1); i<x+1; i++){
      for(let j=y - (maxValue - 1); j<y + 1; j++){
        garden[i][j] = '#';
      }
    }
  
    return garden;
  }
  
  console.log(solution(garden));