var card = {suit: "하트", rank: "A"};
console.log(card.suit); //하트
//console.log(card[rank]); //ReferenceError: rank is not defined
console.log(card["rank"]); //A
card.value = 14;
console.log(card);
delete card.rank;
console.log(card);
console.log("toString" in card);

var card1 = {"suit": "하트", 'rank': "A"};
console.log(card1.rank); //A
console.log(card1["rank"]); //A

var obj = {};
console.log(obj); // {}


var circle = { 
    center:{x: 1.0, y: 2.0}, //원의 중점을 표현하는 객체
    radius: 2.5 //원의 반지름
};
console.log(circle.center.x);

circle.translate = function(a, b){
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
circle.translate(1,2);
console.log(circle.center);

var circle2 = { 
    center:{x: 1.0, y: 2.0}, //원의 중점을 표현하는 객체
    radius: 2.5, //원의 반지름
    area: function() { //원의 넓이를 구하는 메서드
            return Math.PI * this.radius * this.radius;
    }
};
console.log(circle2.area()); 

function dist(p, q){
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt(dx*dx+dy*dy);
};
var p1 = {x: 1, y: 1};
var p2 = {x: 4, y: 5};
var d = dist(p1,p2); //5
console.log(d);

var bark = function(){ console.log("Bow-wow"); };
bark(); //Bow-wow

console.log(bark()); //undefined