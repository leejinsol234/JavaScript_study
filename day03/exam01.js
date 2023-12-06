function Card(suit, rank){
    this.suit = suit;
    this.rank = rank;
}

var card = new Card("하트","A");

console.log(card);

function Particle(x, y, vx, vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx * vx + vy * vy);
}
var p = new Particle(0, 0, 3, 4);
console.log(p);

var now = new Date();
console.log(now);

var then = new Date(2005, 3, 6)
console.log(then);

var elapsed = now - then;
console.log(elapsed);

var a = [2, ,4];
console.log(a);

var evens = [2,4,6,8];
console.log(evens.length);

var a = ["A","B","C","D"];
a.length = 2;
console.log(a);

//var x = new Array(-3); //RangeError: Invalid array length

var evens = new Array(2,4,6,8); 
console.log(evens[2]); // 6 (인덱스가 2인 요소 즉, 세 번째 요소)

var a = ["A","B","C","D"];
console.log(a["2"]); // C