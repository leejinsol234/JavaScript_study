function rotate(a, t){
    let b = a.slice();
    let c = [];
    for (let i = 0; i < t; i++){
        b.unshift(b.pop()); 
console.log(b);
//pop() : 배열의 마지막 요소를 제거하고 제거한 요소를 반환함.
//unshift() : 인자로 전달된 값을 맨 앞에 추가하고 기존의 요소들을 오른쪽으로 밀기
//즉, 배열의 마지막 요소를 꺼내어 맨 앞에 추가함.
    }

    for (let i in a){ // let i in b도 가능
        c.push(Math.abs(a[i]-b[i])); //두 요소의 차이의 절대값을 c에 넣기기
    }

    //최소값
    const m = Math.min.apply(null, c);
		
		//최소값의 인덱스 구하기
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const turn = prompt('순회 횟수는?');

rotate(l, turn);