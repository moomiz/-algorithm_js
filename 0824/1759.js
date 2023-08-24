// 암호 만들기 
let fs = require('fs');
let file = process.platform === "linux" ? 'dev/stdin' : 'example.txt';
let input = fs.readFileSync(file).toString().split('\n');
// 최소 하나의 모음과 최소 두개의 자음 
// 알파벳은 오름차순? 암튼 순서대로 정렬 되어 있슴
// 조건 따져서 완탐으로 구해서 다 출력하면 될 거 같다고 생각 
let [L,C] = input.shift().split(" ").map(Number)
let arr = input.map( m => m.split(' ')).flat();
arr.sort()
let output = [];
const combi = getCombinations(arr,L);
const vowels = ['a','e','i','o','u'];
// 모음과 자음이 제대로 포함 되어 있는지 확인하기
for (let password of combi){
    let voNum = 0;
    let coNum = 0;
    for(let i = 0; i < L; i++){
        if(vowels.includes(password[i])){
            voNum += 1;
        }else{
            coNum += 1;
        }
        if(voNum >= 1 && coNum >= 2){
            output.push(password.join(""))
            break
        }
    }
} 
console.log(output.join('\n'));
// 조합하는 코드 작성 

function getCombinations(arr,selectNum){
    const result =[];
    if (selectNum === 1) return arr.map((el)=>[el]);
    arr.forEach((fixed,index,origin)=>{
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest,selectNum -1);
        const attached =combinations.map((el)=>[fixed,...el]);
        result.push(...attached);
    });
    return result;
} 

// 출력 초과 뜸! ㅠㅠㅠㅠㅠㅠㅠㅠㅠ 다시 풀어보기,, 
