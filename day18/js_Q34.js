const h = prompt("키를 입력하세요.").split(" ");
const r = h.sort(function(h,a){ return h-a });
console.log(r);