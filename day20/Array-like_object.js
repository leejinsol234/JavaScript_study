//유사 배열 객체를 생성해서 값을 대입한다.
var a = {};
for(var i=0; i<10; i++){
    a[i] = i;
}
a.length = 10;
//유사 배열 객체의 요소 합을 구한다.
for(var i=0,sum=0; i<a.length; i++) sum += a[i];
console.log(sum);