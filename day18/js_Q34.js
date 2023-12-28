const arr1 = prompt("키를 입력하세요.").split(" ");
const arr2 = arr1.sort(function(a,b){ return a-b });

console.log(arr1 === arr2 ? "YES" : "NO");
  
