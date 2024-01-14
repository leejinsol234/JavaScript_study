/*const nums = prompt("스탬프로 모은 숫자를 입력하세요.").split(' ').map((n) => {
    return parseInt(n, 10);
  });

const sort = nums.sort((a, b) => { return a-b; });
for(let i=1; i<sort.length; i++){
    if(sort[i] - sort[i-1] === 1){
        console.log("YES");
    } else {
        console.log("No");
    }
}
*/

function sol(l){ 
    l.sort((a,b) => { //오름차순 정렬
      return a-b;
    }); 
  
    for (let i=0; i<l.length-1; i++){ //비교 회수는 배열의 길이-1
      if(l[i]+1 !== l[i+1]){ //연속된 배열 요소의 비교
        return 'NO';
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));