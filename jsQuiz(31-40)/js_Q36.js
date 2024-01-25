const num = prompt("1~9 사이의 정수를 입력하세요.");
let g = {};
for(let i=1; i<=9; i++){
    g[i] = num * i;
}

console.log(g);