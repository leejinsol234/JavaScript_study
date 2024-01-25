const planet = {
    "수성" : "Mercury",
    "금성" : "Venus",
    "지구" : "Earth",
    "화성" : "Mars",
    "목성" : "Jupiter",
    "토성" : "Saturn",
    "천왕성" : "Uranus",
    "해왕성" : "Neptune"
}
 const name = prompt("태양계 행성 중 한글로 이름을 한 개 입력하세요.")
 console.log(planet[name]);