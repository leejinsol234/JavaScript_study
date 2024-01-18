const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let x = [];

for(var i=0; i<a.length; i++){
    x[i][j] = a.shift();
    for(var j=0; j<b.length; j++){
        x[i][j] = b.shift();
    }
}

console.log(x);