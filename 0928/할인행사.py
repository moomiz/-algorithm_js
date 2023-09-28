def solution(want, number, discount):
    answer = 0
    # 딕셔너리 만들어서 {want:number}로 만들고,
    want_cnt = len(want);
    dic = {}
    for i in range(want_cnt):
        dic[want[i]] = number[i]
    # 슬라이딩 윈도우 쓰면 될 듯
    # 그냥 슬라이스 쓰긴했는데.. 머쓱
    now = 0
    while now <= len(discount) - 10:
        lst = discount[now:now + 10];
        switch = True

        for j in want:
            if lst.count(j) == dic[j]:
                continue
            else:
                switch = False
                break
        if switch == True:
            answer += 1
        now += 1

    return answer