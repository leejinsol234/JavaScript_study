function comma(s) {
    if (s.length <= 3) {
      return s;
    } else {
      return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
    }
  }
  
  const n = prompt('숫자를 입력해주세요.');
  console.log(comma(n));