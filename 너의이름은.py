import sys
sys.stdin = open("example.txt","r")
input = sys.stdin.readline
N,K,Q = map(int,input().split());
lst = []
for _ in range(K):
    R, P = input().split()
    lst.append([int(R),P])
alpha = [chr(i) for i in range(65,65+N)]
read = [False] * N
setlst = set()
for i in range(K):
    if lst[i][0] == 0:
        print(-1)
        break
    else:
        setlst.add(lst[i][1])
# 다시 풀기
# 왜 못풀지..?


