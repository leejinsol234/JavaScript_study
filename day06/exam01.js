console.log(Math.sqrt(100001));
console.log(Math.sqrt(100000));

console.log(Math.sqrt(100001)-Math.sqrt(100000));

var a = 3;
console.log("a 값은 " + a + " 입니다.") 

var msg = "Everything is practice.";
console.log(msg); //Everything is practice.

var msg = new String("Everything is practice.");
console.log(msg); //String ('Everything is practice.')

msg[3] //"r"
msg[msg.length-1] //"."

msg[3] = "R";
console.log(msg);

var p = null;
p && p.name //null : p가 false로 평가되므로 p를 반환함. 우변(p.name)은 평가하지 않음
p = { name : "Tom", age : 18 };
p && p.name //"Tom" : p가 true로 평가되므로 p.name을 반환함