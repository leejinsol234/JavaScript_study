var x = "global x";
(function() {
	var x = "local x";
	var y = "local y";
})();
console.log(x);
console.log(y);