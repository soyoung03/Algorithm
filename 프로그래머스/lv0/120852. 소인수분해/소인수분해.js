function solution(n) {
    let answer = [];
    for (var i = 2; i <= n; i++) {
        while (n % i === 0) {
            if (!answer.includes(i)) {
                answer.push(i);
            }
            n /= i;
        }
    }
    return answer;
}