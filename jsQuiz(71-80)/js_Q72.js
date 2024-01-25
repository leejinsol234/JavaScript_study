const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  function breadthFirstSearch(graph, startNode) {
    const visited = {};
    const queue = [];
  
    console.log(startNode); //시작 노드를 출력
    visited[startNode] = true; //visited에 시작 노드를 넣고
    queue.push(startNode); //queue에 시작 노드를 담아줌
  
    while (queue.length > 0) { //queue 요소가 있으면
      const currentNode = queue.shift(); //queue의 첫 번째 요소를 currentNode에 담고
      const neighbors = graph[currentNode]; //currentNode의 요소들을 neighbors에 담아줌
  
      if (neighbors) {
        for (const neighbor of neighbors) { //neighbors를 돌면서 
          if (!visited[neighbor]) { //탐색된 적 없는 neighbor일 경우
            console.log(neighbor); //출력하고
            visited[neighbor] = true; //visited에 추가
            queue.push(neighbor); //queue에 neighbor 추가
          }
        }
      }
    }
  }
  
  breadthFirstSearch(graph, 'E');