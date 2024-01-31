let value ="0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"
let sp = value.split('\n');
let count = 0;

for (let i of sp){
  sp[count] = i.replace('1', 'f').split(' ');
  count += 1;
//sp에 1을 f로 치환한 값들을 담기
}

count = 0;
let search = 0;

for (let s of sp){ //행 순환
  for (let i of s){ //
    if (i === 'f'){
      search = s.indexOf(i); //f가 위치하는 index(몇 번째 열인지)를 search에 대입
      if (search > 0){
        s[search-1] = '*'; //(f가 제일 왼쪽(0번째 index)에 있지 않다면)f의 왼쪽에 * 대임
      }
      if (search < 4){ 
        s[search+1] = '*'; //(f가 제일 오른쪽(4번째 index)에 있지 않다면)f의 오른쪽에 * 대입
      }
      if (count > 0){
        sp[count-1][search] = '*'; //f 위의 행에 * 대입
      }
      if (count < 4){
        sp[count+1][search] = '*'; //f 아래의 행에 * 대입
      }
    }
  }
  count += 1;
}

for (let i of sp){
  console.log(i);
}