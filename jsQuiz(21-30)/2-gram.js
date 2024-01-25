const string = prompt('문자열을 입력하세요.');

for(let i=0; i<string.length; i++){
    console.log(string[i]+" "+string[i+1]);
}