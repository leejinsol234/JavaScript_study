var s = "ABC";
console.log(typeof s);

var a = 2;
if(a % 2 == 0) {
    parity = "짝수";
} else {
    parity = "홀수";
}

var parity = (a % 2 == 0)? "짝수" : "홀수";
console.log(parity);

for(var i=1, sum=0; i<=10; i++){
    sum += i;
}

var x = 1;
eval("x++;");

var x = 1;
x++;

var formula = "x*x";
eval("function f(x) { return " + formula + "; }" );

function f(x) { return x*x; };

var x = 1234.567;
x.toString(16);