// 한 줄에 공백으로 값이 들어올 때 
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

// 한 줄에 하나씩 값이 들어올 때
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');