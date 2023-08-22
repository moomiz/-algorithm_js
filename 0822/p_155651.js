function solution(book_time) {
    var answer = 0;
    // 시작 시간 순으로 정렬 
    book_time.sort();
    // 종료시간을 넣을 배열 
    const room = []; 
    book_time.forEach((t)=>{
        const tmp = t[0].split(":");
        const startTime = Number(tmp[0])*60 + Number(tmp[1]) 
        const index = room.findIndex((e)=> e <= startTime);
        // 없는 경우: room에 추가하고 새로운 종료시간을 넣어줌 
        if(index === -1) room.push(getNextTime(t[1]));
        // 있는 경우: 기존 room의 종료시간을 변경해준다. 
        else room[index] = getNextTime(t[1]);
        });
                                 
    return room.length;
}

function getNextTime(endTime) {
    const next = endTime.split(":");
    return Number(next[0]) * 60 + Number(next[1]) + 10;
}

// 풀이 참조함! 
// 문자열인 시간을 숫자로 바꿔서 시작시간을 기준으로 큰 경우가 있으면
// 종료시간을 변경해주고 작은 경우는 방을 추가해주는 방식으로 진행
