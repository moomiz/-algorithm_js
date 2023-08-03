// DFS와 BFS 
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin":"example.txt";
let input  = fs.readFileSync(file).toString().split("\n");
let num = input[0].split(" ");
const N = parseInt(num[0]); // 정점의 갯수
const M = parseInt(num[1]); // 간선의 갯수
const V = parseInt(num[2]); // 탐색을 시작할 정점의 번호 

let arr = input.splice(1,M+1)
let newArr = arr.map(i => i.split(' ').map(i => Number(i)))

// 인접 리스트 만들기!
// 문제가 개념 다지기 좋은 듯 내일 한번 더 풀어보기! 
let graph2 = [...Array(N+1)].map(e=>[]);
console.log(graph2)
for(let i = 0; i < M-1; i++){
    let [from, to]= newArr[i].map(Number);
    graph2[from].push(to);
    graph2[to].push(from)
}

// 문제 풀이 참조함 ㅠㅠ
// bfs(넓이 우선 탐색): 시작 정점에서 부터 인접해 있는 노드를 우선으로 탐색하는 방법
// bfs 최단거리 구하기 , 큐 구조, shift 이용 , 오름차순
const bfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
  
    needVisit.push(startNode)
    while(needVisit.length !==0){
      const node = needVisit.shift();
      if(!visited.includes(node)){
        visited.push(node);
        let nodes = graph[node];
        needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
        console.log(needVisit)
        console.log(visited)
      }
    }
  
    return visited;
  };
  
// dfs(깊이 우선 탐색): 시작점에서 부터 해당 분기를 전부 탐색 한 후 다음 분기를 탐색하는 방법 
// 한개의 큐, 한개의 스택을 사용, 주로 경로의 존재 여부를 판별하는 문제에 사용 
//  스택 구조, pop 사용, 내림차순
const dfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [];
    needVisit.push(startNode);
    while(needVisit.length !==0){
      const node = needVisit.pop();
      if(!visited.includes(node)){
        visited.push(node);
        let nodes = graph[node];
        needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
        // console.log(needVisit)
        // console.log(visited)
      }
    }
    return visited;
  };
  

console.log(dfs(graph2,V).join(' '))
console.log(bfs(graph2,V).join(' '))

// 풀이 왜 안되는지 다른 문제 풀고 다시 해보기 ㅠㅠ
 