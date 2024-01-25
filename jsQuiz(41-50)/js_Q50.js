function bubble(arr) {
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length -1; j++) {
        if (result[j] > result[j + 1]) {
            let temp = result[j]; 
            //다음 인덱스의 요소가 더 클 때 요소의 인덱스(위치)를 바꾸기 위해 비어있는 다른 변수에 잠시 담아둠.
            result[j] = result[j + 1];    
            result[j + 1] = temp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));