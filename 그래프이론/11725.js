let fs = require("fs");
let file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
let N  = Number(input.shift());
const graph = [...new Array(N+1)].map(() => []);

input.forEach(v => {
    const [ start, end ] = v.split(' ').map(v => +v);
    graph[start].push(end);
    graph[end].push(start);
  });
console.log(graph);







