function add1(p) { 
    p.x = p.x + 1; 
    p.y = p.y + 1; 
    return p;
}
var a = { x: 3, y: 4 };
var b = add1(a);
console.log(a, b);

var a = "global";
function f(){
		var a = "local";
		console.log(a); // local
		return a;
}
f();
console.log(a); //global

//console.log(square(3)); //TypeError TypeError: square is not a function
var square = square = function(x) { return x * x; };