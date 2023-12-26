function* gen(){
	yield 1; //포인트 1
	yield 2; //포인트 2
	yield 3; //포인트 3
}
var iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());