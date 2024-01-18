let kg = parseInt(prompt("정량을 입력하세요."),10);
let result = 0;

while(true){
    if(kg % 7 === 0){
        result += parseInt(kg/7, 10);
        console.log(result);
        break;
    }
    kg -= 3;
    result += 1;
    if(kg < 0){
        console.log(-1);
        break;
    }
}

