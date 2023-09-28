import sys

N,M = map(int,input().split());
graph = [list(map(int,input().split())) for _ in range(N)]
# 배낭에 넣을 수 있는 물건들의 가치합의 최댓값
NowBag = 0
maxValue = 0
value = 0
for item in graph:
    W = item[0]
    V = item[1]
    if NowBag + W < M:
        NowBag += W
        value += V
    elif NowBag + W == M:
        NowBag = 0
        value += V
        if value > maxValue:
            maxValue = value
            value = 0
    elif NowBag + W > M:
        NowBag = W
        if value > maxValue:
            maxValue = value
            value = V
print(maxValue)