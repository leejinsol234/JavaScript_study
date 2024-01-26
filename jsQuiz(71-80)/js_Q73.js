const graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']};

const user_input = prompt('입력해주세요').split(' ');
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution(){
  let count = -1; 
//초기값을 0으로 설정하면 첫 번째 레벨부터 1이 정확한 레벨 계산을 할 수 없음.
//반복문 진입시에 0부터 시작해야 된다.
	
  while (queue.length !== 0){
    count += 1; //
        
    let size = queue.length;

    for (let i=0; i<size; i++){let node = queue.splice(0,1);
			if (node == end){
                return count;
            }
            
			for (let next_node in graph[node]) { //현재 노드들의 이웃 노드 순회
                if (!visited.includes(graph[node][next_node])){ 
//현재 이웃 노드가 아직 탐색되지 않은 노드일 경우
                    visited.push(graph[node][next_node]); //visited에 추가
                    queue.push(graph[node][next_node]); //queue에 추가
                    
                }	
            }
        }
    }
}
console.log(solution());