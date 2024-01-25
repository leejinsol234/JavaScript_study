const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) { //소수의 조건: 1보다 큰 양의 정수이므로 2부터 
    const result = num % i; //입력받은 정수를 i로 나눈 결과 값을 담을 변수
    if (result === 0) { //입력받은 정수를 i로 나눈 나머지가 0일 때
      console.log('NO'); //소수가 아니므로 NO 출력
      return false; //조건문 빠져나감
    }
  }
  if (num === 1) { //입력받은 정수가 1일 때
    console.log('NO'); //소수의 조건: 1보다 큰 양의 정수이므로 2부터 이므로
    return;
  }
  console.log('YES');
}

check_prime(num);