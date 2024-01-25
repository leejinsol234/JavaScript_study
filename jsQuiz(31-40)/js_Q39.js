const str = prompt("영문을 입력하세요.");
const mod = str.toString().replace("q","e");
console.log(mod);

//1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
//const word = prompt('입력하세요.');

//console.log(word.replace(/q/gi, 'e'));
//g: globla(전역으로 검색)
//i: ignore case(대소문자 구분 없이 검색)