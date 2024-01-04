let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){ //입력받은 알파벳들이 소문자일 때
    b.push(a[i].toUpperCase()); //b에 대문자로 바꾼 a의 요소들을 담는다.
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){ //배열을 s에 문자열로 담기
  s += b[j];
}

console.log(s);