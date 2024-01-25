const nums = prompt("10개의 정수를 입력하세요.").split(" ");

var primitive = nums.map(function(n){
    return parseInt(n,10);
});

var asc = primitive.sort(function(a,b){ return a-b; });

console.log(asc.pop());