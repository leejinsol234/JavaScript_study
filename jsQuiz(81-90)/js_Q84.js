function solution(chars) {
    let permute = [];
  
    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) { 
        permute.push(prefix + chars[i]); //ab를 먼저 넣고
        if (permute.indexOf(chars[i] + prefix) === -1) { 
          permute.push(chars[i] + prefix); //ba도 넣기
        }
        f(prefix + chars[i], chars.slice(i + 1));
      }
    }
  
    f('', chars);
  
    let result = permute.filter(x => x.length === len); 
  //result에 요소의 길이가 len과 같은 것들만 남기고
    result.sort((a, b) => {return b-a}); //result 요소들을 내림차순으로 정렬
  
    return result[0];
  }
  
  const num = prompt('숫자를 입력하세요').split('');
  const len = parseInt(prompt('몇 개의 수를 선택하시겠습니까?'),10);
  console.log(solution(num));