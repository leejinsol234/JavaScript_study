//2차원 좌표점 (x,y)를 원점 기준으로 각도 theta만큼 회전하기
function rotation(x,y,theta){
    var s = Math.sin(theta), c = Math.cos(theta);
    return [c*x - s*y, s*x + c*y];
}
var[a,b]= rotation(1,2,Math.PI/3);

