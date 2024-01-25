function circle(r) {
    const result = r * r * 3.14;
    return result;
}

const r = prompt("반지름을 정수로 입력하세요.");
console.log(circle(r));