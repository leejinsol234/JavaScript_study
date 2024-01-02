var a = {0:"A",1:"B",2:"C", length:3};
Array.prototype.join.call(a,","); //"A,B,C"

Array.prototype.push.call(a,"D"); //{0:"A", 1:"B", 2:"C", 3:"D", length:4};

Array.prototype.slice.call(a,0); //["A","B","C","D"] -> 진짜 배열로 반환

var a = {0:1, 1:2, 2:3, length: 3};
Array.prototype.map.call(a,function(v){ return v*v; }); //[1,4,9]
