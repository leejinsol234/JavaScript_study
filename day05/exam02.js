//문제 1: 배열의 삭제
//다음 배열에서 400,500을 삭제하는 code를 작성하기
var nums = [100,200,300,400,500];

//답
nums.pop();
nums.pop();
console.log(nums);

//문제 2: 배열의 내장 함수
//배열의 내장 함수를 이용하여 코드를 입력하고 다음과 같이 출력하기
var arr = [200, 100, 300];

//출력
//[200, 100, 10000, 300]

//답
arr.splice(2,0,10000);
console.log(arr);

//문제 5: for문 계산
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b); //16