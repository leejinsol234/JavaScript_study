const str = prompt("줄임말의 뜻을 입력하세요.").split(' ');

let result = '';

for(let s of str){
    //result += s.shift();
    //str은 문자열이므로 shift() 사용할 수 없음
    result += s.charAt(0);
}
console.log(result);