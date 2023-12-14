const s = prompt('거꾸로 출력하고 싶은 문장을 입력하세요.');

const reverse = s.split('').reverse().join('');

console.log(reverse);