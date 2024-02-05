let student_score = [];
let class_score = [];
let total_score = [];

for (let k = 0; k < 7; k++) { 
  class_score = [];
  for (let j = 0; j < 30; j++) { 
    student_score = [];
    for (let i = 0; i < 5; i++) { //과목별 전체 점수
      student_score.push(Math.floor(Math.random() * 100) + 1); 
      //1부터 100까지의 난수를 생성해서 한 학생의 5과목에 대한 각 점수를 student_score 배열에 넣기
    }
    class_score.push(student_score); //한 반(30명)의 점수를 class_score 배열에 넣기
  }
  total_score.push(class_score); //7개 반의 점수를 total_score 배열에 넣기
}

console.log(total_score);

let total_average = []; //전교 평균
let c_average = []; //반별 평균
let s_average = 0; //학생별 평균
let s_sum = 0; //학생별 총점
let c_sum = 0; //반별 총점
let student_one = 0;
let first = 0;

for (let c of total_score) { //7개 반의 각 반별 총점을 순회
   //console.log(c);
  for (let s of c) { //한 반의 학생별 총점을 순회
    s_sum = s.reduce((a, b) => a + b); //학생별 각 과목의 총점을 s_sum에 대입
    s_average = s_sum / 5; //학생별 평균 점수는 s_average에 대입
    c_average.push(s_average); //c.average에 s_average들을 대입
    if (first < s_average){ //학생별 평균 점수를 확인하면서 최대값(1등) 구하기
        first = s_average;
    }
  }
  console.log(first);
  first = 0; //1등 점수 초기화
  console.log(c_average); 
  total_average.push(c_average.reduce((a, b) => a + b)/30); //반별 평균을 구해서 total_average에 넣기
  c_average = [];
}
console.log(total_average);
console.log(total_average.reduce((a, b) => a + b)/7); //전교 평균