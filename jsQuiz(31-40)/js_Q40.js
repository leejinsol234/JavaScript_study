//limit*n-몸무게>=0
//(limit*n-몸무게)/인원수

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i=1; i<=n; i++){ //탑승 인원 수만큼 돌면서 total에 몸무게를 더한다.
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){ //total이 제한 무게보다 작거나 같을 때 인원수를 count에 대입한다.
		count = i;
  }
}

console.log(count);