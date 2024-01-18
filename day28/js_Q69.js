// 소수 구하기
let prime = [];
let isPrime = true;

for(let i = 2; i < 100; i++){
   for(let j = 2; j < i; j++){
     if(i % j == 0){
       isPrime = false;
     }
   }
   if(isPrime){
     prime.push(i);
   }
   isPrime = true;
}

let val = parseInt(prompt('숫자를 입력하세요:'), 10);

let gPartition = [];

for(let n of prime){
  if(prime.includes(val - n) && n <= (val - n)){ 
    //입력받은 2보다 큰 짝수에서 소수를 뺀 값이 소수이고, 소수보다 크거나 같으면
    gPartition.push([n, val - n])
    //골드바흐 파티션에 추가
  }
}

let gap = gPartition.map(e => e[1] - e[0]); //두 소수의 차이 구해서 gap에 담기

let small = gPartition[gap.indexOf(Math.min.apply(null,gap))]; 
let big = gPartition[gap.indexOf(Math.max.apply(null,gap))];

console.log(gPartition);
console.log(small);
console.log(big);