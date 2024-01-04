let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){ //n이 0이 아닌 동안
  sum += (n % 10); //n을 10으로 나눈 나머지를 담는다.
  n = Math.floor(n/10); //n을 10으로 나눈 몫과 같거나 작은 정수 중에서 가장 큰 수를 담는다.
}

console.log(sum);