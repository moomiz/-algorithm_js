let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");