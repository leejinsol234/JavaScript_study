function one(n){
    function two(m){
        //pass
        //함수의 합성?
        //for(let i=1; i<=n; i++) m *= m;
        //아님

        const factory = Math.pow(m,n);
        return factory;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); //100
console.log(b(10)); //1000
console.log(c(10)); //10000