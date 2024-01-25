const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  
  function dfs(graph, start){
    let visited = []; //탐색을 마친 노드
    let stack = [start]; //시작 노드 요소들의 배열
  
    while (stack.length !== 0){ //탐색할 노드가 있음
      let n = stack.pop(); //시작 노드의 마지막 노드를 꺼냄
      if (!visited.includes(n)){ //탐색을 마친 노드 중에 n이 없으면
        visited.push(n); //탐색을 마친 노드 배열에 n을 넣어줌
        let sub = graph[n].filter(x => !visited.includes(x)); 
              //graph[n]이 가지고 있는 요소들 중 탐색된 적 없는 요소들을 담음
        for(let i of sub) { //sub의 요소들을 시작 노드 요소들의 배열에 넣어줌
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  
  console.log(dfs(graph, 'E'));