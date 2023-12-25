function memorize(f) {
	var cache = {};
	return function(x){
		if(cache[x] == undefined) cache[x] = f(x);
		return cache[x];
	};
}

function memorize(f){
	var cache = {};
	return function(x){
		if(cache[x] == undefined) cache[x] = f(x);
		return cache[x];
	}
}
function isPrime(n){
	if(n<2) return false;
	var m = Math.sqrt(n);
	for(var i=2; i<=m; i++)if( n%i == 0 ) return false;
	return true;
}
var isPrime_memo = memorize(isPrime);
var N = 1000;
for(var i=2; i<=N; i++) isPrime_memo(i);
//쌍둥이 소수의 목록을 출력
for(var i=2; i+2<=N; i++){
	if( isPrime_memo(i) && isPrime_memo(i+2) ) console.log(i + "," + (i+2));
}

function memorize(f) {
	var cache = {};
	return function(x) {
		if(cache[x] == undefined) cache[x] = f(x);
		return cache[x];
	};
}
var fibonacci = memorize(function(n){
		if(n<2) return n;
		return fibonacci(n-1) + fibonacci(n-2);
});
for(var i=0; i<=20; i++){
	console.log((" "+i).slice(-2)+":"+fibonacci(i));
}	

function memorize(f) {
	var cache = {};
	return function(){
		//인수를 쉼표로 연결한 문자열을 만들어서 캐시의 키 값으로 사용한다.
		var key = "";
		for(var i=0; i<arguments.length; i++) key += arguments[i] + ",";
		if(cache[key] == undefined) cache[key] = f.apply(null,arguments);
		return cache[key];
	};
}