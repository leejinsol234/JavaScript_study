let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1; //배열에 0번째 인덱스부터 1~20 담기
}

arr.forEach((n) => {
  while(n !== 0){ //n이 0이 아닐 동안
    sum += (n % 10); //sum에 n을 10으로 나눈 나머지를 더해주기
    n = Math.floor(n/10); //n을 10으로 나눈 몫과 같거나 작은 정수 중에서 가장 큰 수를 담는다.  
	}
})

console.log(sum);