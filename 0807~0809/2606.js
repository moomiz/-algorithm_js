// 바이러스
// 인접 경로 찾기
// dfs로 풀기
let fs = require('fs');
let file = process.platform === "linux" ? "/dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().trim().split("\n");
let N  =Number(input.shift()); // 정점의 갯수
let edge = Number(input.shift()); // 간선의 갯수
const computer = input.map(v => v.split(" ").map(i => Number(i)));
// 인접 그래프 만들기 
let graph = [...Array(N+1)].map(e=>[]);
for(let i = 0; i < edge; i++){
    let [from, to] =computer[i].map(Number);
    graph[from].push(to);
    graph[to].push(from);
}
const dfs = (graph,startNode) =>{
    let visited = [startNode];
    let needVisit = [];
    needVisit.push(graph[startNode])
    // console.log(needVisit,"needVisit");
    while(needVisit.length!==0){
        const node = needVisit.pop();
        for( let i of node){
            // console.log(i)
            if(!visited.includes(i)){
                visited.push(i);
                let nodes = graph[i]
                needVisit = [...needVisit,nodes]

            }
        }
    }
    return visited.length-1
}

const result = dfs(graph,1);
console.log(result)