function sol(string){
    let result = [];
    for (let i=1; i<string.length+1; i++){ 
//현재 반복에서 추출하려는 부분 문자열의 길이만큼 돌면서
        for (let j=0; j<i; j++){
//현재 부분 문자열의 시작 인덱스
            result.push(string.slice(j, j+string.length-i+1)); 
//slice()로 시작 인덱스부터 종료 인덱스까지의 부분 문자열 반환
//따라서 string.slice(j, j+string.length-i+1)은 현재 위치에서 시작하여 
//길이 string.length-i+1 만큼의 부분 문자열을 추출하는 것이다.
        }  
    }
    return result;
}
    
const inputOne = prompt('첫번째 문자열을 입력해주세요.');
const inputTwo = prompt('두번째 문자열을 입력해주세요.');
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a,b)=>{
    return b.length-a.length;
});

console.log(intersection[0].length);