var a = 1;

function outer(){
	console.log(a)

		function inner(){
			console.log(a)
			var a = 3
		}
	inner()
	console.log(a)
}
outer()
console.log(a)

//hoisting 전
function b(){
	var x = 1
	console.log(x)
	var x 
	console.log(x)
	var x = 2
	console.log(x)
}
b()