import sys
sys.stdin = open("example.txt","r")
input = sys.stdin.readline
N = int(input())
switch = list(map(int,input().split()))
s = int(input())
status = [list(map(int,input().split()))for _ in range(s)]
for student in status:
    if student[0] == 1:
    # 남학생인 경우
        for i in range(N):
            if (i+1) % student[1] == 0:
                if switch[i] == 1:
                    switch[i] = 0
                else:
                    switch[i] = 1
    else:
    # 여학생인 경우
        num = student[0] - 1
        if status[num] == 0:
            status[num] = 1
        else:
            status[num] = 0
        endPoint = min(num+1,N -num + 1)
        for i in range(1,endPoint):
            if

for i in range(N):
    print(switch[i], end=" ")
    if i > 0 and i % 20 == 0:
        print()