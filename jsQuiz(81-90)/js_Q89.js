function make_map(n,m,char,obj){
    //지도 초기화하기
    //각 지도 가로/세로 두칸 외벽을 포함한 크기만큼 추가하기(각 끝 한칸씩)
    let world_map = [];
    for(let i=0; i<m+2; i++){
      world_map.push(Array(n+2).fill(0));
    }
  
    //지도 외벽 그리기
    for(let i in world_map){
      for(let j in world_map[0]){
        if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
          world_map[i][j] = 2;
        }
      }
    }
  
    //지도에 캐릭터 추가하기/ 외벽으로 인해 좌표에 +1을 해줍니다.
    world_map[char[0]+1][char[1]+1] = 1;
    //지도에 장애물 추가하기
    for (let i of obj){
      if (world_map[i[0]+1][i[1]+1] != 1){
        world_map[i[0]+1][i[1]+1] = 2;
      } else {
        world_map[i[0]+1][i[1]+1] = 1;
      }
    }
    //장애물을 추가하려는 자리에 캐릭터가 있을 시 캐릭터는 그대로둔다
    //마찬가지 외벽으로 인한 좌표 조정을 해준다.
    for(let i of world_map) {
      console.log(i);
    }
    return world_map;
  }
  
  function move(world_map, moving){
    let x = 0;
    let y = 0;
  
    for(let i of world_map){
      if(i.includes(1)){ //캐릭터가 있는 곳의
        x = world_map.indexOf(i); //열의 인덱스를 x에 저장
        y = i.indexOf(1); //행의 인덱스를 y에 저장
      }
    }
  
    world_map[y][x] = 0; //현재 캐릭터의 위치를 초기화
  
    for(let i of moving){
      if (i == 1 && world_map[y-1][x]!=2){ //바로 위의 행이 장애물이 없다면
        y -= 1;
      } else if (i==2 && world_map[y+1][x]!=2){ //바로 아래 행에 장애물이 없다면
        y += 1; 
      } else if (i==3 && world_map[y][x-1]!=2){ //왼쪽 열에 장애물이 없다면
        x -= 1;
      } else if (i==4 && world_map[y][x+1]!=2){ //오른쪽 열에 장애물이 없다면
        x += 1;
      }
    }
  
    world_map[y][x] = 1;
  
    for (let i of world_map){
      console.log(i);
    }
    return [x,y];
  }
  
  
  console.log('캐릭터 이동 전 지도');
  const world_map = make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);
  
  const moving = [2,2,2,4,4,4];
  console.log('캐릭터 이동 후 지도');
  console.log('캐릭터위치 :',move(world_map, moving));