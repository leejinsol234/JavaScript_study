const names = "손오공 야모챠 베지터 피콜로".split(" ");
const points = "70 10 55 40".split(" ");
const points_int = points.map(a => parseInt(a,10));

function sol(names, points){
    let temp = [];
    for(let i of names){
        let obj ={};
        obj['names'] = i;
        obj['points'] = points[names.indexOf(i)];
        temp.push(obj);
        //names와 points를 짝지어 temp에 담기
    }
    console.log(temp);

    temp.sort(function (a,b){
        return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
        //배열의 요소들 중 value들을 내림차순으로 정렬
    })

    console.log(temp);

    let result ={};
    for(let i of temp){
        result[i['name']] = temp.indexOf(i)+1;
        //result에 담긴 value값에 인덱스 번호 0부터 1을 더한 값을 대입해줌으로써 등수를 정한다.
    };
    return result;
}


console.log(sol(names, points_int));