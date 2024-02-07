function solution(plate, moves){
    let stack = [0];
    let point = 0;
  
    //moves에 입력한 값이 있을 동안
    while (moves.length !== 0){
        //m에 moves 배열의 첫 번째 인덱스의 값을 담는다.
      let m = moves.shift(); //1
      for (let i=0; i<plate.length; i++){
        //plate의 행을 돌면서 0이 아닐 때
        if (plate[i][m-1] !== 0) { //plate[0][0]부터
            //stack[0] == plate[0][0] -> stack에 쌓여 있는 값과 퍼즐판에서 가지고 온 값이 같으면
          if (stack[stack.length-1] == plate[i][m-1]) {
            //point에 해당 퍼즐판의 값에 2를 곱한 값을 더한다
            point += plate[i][m-1]*2;
            //퍼즐판에서 가지고 올 수를 0으로 초기화
            plate[i][m-1] = 0;
            //stack에 있던 값 제거
            stack.pop();
          } else {
            //같지 않으면 stack에 쌓기
            stack.push(plate[i][m-1]);
          }
          //퍼즐판에서 가지고 올 수를 0으로 초기화
          plate[i][m-1] = 0;
          break;
        } else { //plate의 행을 돌면서 0일 때
            //plate의 길이에서 1을 뺸 값이 i와 같고(같은 행 안에서 더이상 읽어올 값이 없고), 퍼즐판에서 가지고 올 수가 없으면
          if (i == plate.length-1 && plate[i][m-1] == 0){
            //감점
            point -= 1;
          }
        }
      }
    }
  
    return point;
  }
  
  const plate = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]];
  const moves = [1,1,1,1,3,3,3];
  
  console.log(solution(plate, moves));