let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().trim().split("\n");