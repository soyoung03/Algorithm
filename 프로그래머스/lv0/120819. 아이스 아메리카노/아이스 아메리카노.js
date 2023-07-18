function solution(money) {
    var answer = [];
    let ice=5500;
    answer.push(~~(money/ice));
    answer.push(money%ice);
    return answer;
}