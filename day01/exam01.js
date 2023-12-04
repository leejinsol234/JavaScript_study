var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2); //false

var HEART = Symbol("하트");
console.log(HEART.toString()); //Symbol(하트)

var sym3 = Symbol.for("club");
var sym4 = Symbol.for("club");
console.log(sym3 == sym4); //true

var sym5 = Symbol.for("club");
var sym6 = Symbol("club");
console.log(sym5); //Symbol(club)
console.log(sym6); //Symbol(club)
console.log(Symbol.keyFor(sym5)); //club
console.log(Symbol.keyFor(sym6)); //undefined

