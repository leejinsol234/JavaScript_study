const garden = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]];
  
  function solution(garden){
    const width = garden[0].length; //너비는 첫 번째 행의 길이와 같다.
    const height = garden.length; //높이 -> 행의 수와 같다.
  
    let garden_sum = []; //만들 텃밭
    for (let i=0; i<garden.length; i++){
        garden_sum.push(Array(garden.length).fill(0));
    }
  
    for(let i=0; i<height; i++){
      for(let j=0; j<width; j++){
        if (garden[i][j] == 0){
            garden_sum[i][j] = 1;
        } else {
            garden_sum[i][j] = 0;
        }
      }
    }
  
    for(let i=1; i<height; i++){
      for(let j=1; j<width; j++){
        if (garden_sum[i][j] == 1){
          let min;
          if(garden_sum[i-1][j] > garden_sum[i][j-1]){
            min = garden_sum[i][j-1];
          } else if (garden_sum[i-1][j-1] > garden_sum[i-1][j]) {
            min = garden_sum[i-1][j];
          } else {
            min = garden_sum[i-1][j-1]
          }
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