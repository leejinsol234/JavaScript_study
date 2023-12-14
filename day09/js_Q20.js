const n = prompt('두 개의 숫자를 입력하세요.').split(' ');
const a = Math.floor(parseInt(n[0],10)/parseInt(n[1],10));
const b = parseInt(n[0],10)%parseInt(n[1],10);
console.log(a+' '+b);