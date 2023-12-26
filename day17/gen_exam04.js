function* idMaker(){
	var count = 0;
	while(true){
		try{
				yield count++;
		} catch(e){
				console.log("오류가 발생했습니다.");
		}
	}
}
var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error("오류"));