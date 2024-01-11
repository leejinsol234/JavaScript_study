const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea']; //korea의 value를 w에 담기

delete nationWidth['korea']; //korea의 value값 지우기

const entry = Object.entries(nationWidth); //속성 쌍을 배열로 담기
const values = Object.values(nationWidth); //value값들을 배열로 담기

//gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){ //나라별 value값 - korea의 value값이 최대값보다 작으면
    gap = Math.abs(entry[i][1] - w); //영토 넓이의 차이를 절대값으로 gap에 담기
    item = entry[i]; //프로퍼티를 item에 담기
  }
}

console.log(item[0], item[1] - w);