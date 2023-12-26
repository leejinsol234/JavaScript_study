function tag(strings, ...values){
	console.log(strings); //['a\n', 'b\n', 'c', '', raw: Array(4)]
	console.log(strings.raw);
}
tag`a\n${1}b\n${2}c${3}`;