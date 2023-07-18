function solution(dot) {
    var answer = 0;
    dot[0] > 0 && dot[1] > 0 ? answer = 1: null;
    dot[0] < 0 && dot[1] > 0 ? answer = 2: null;
    dot[0] < 0 && dot[1] < 0 ? answer = 3: null;
    dot[0] > 0 && dot[1] < 0 ? answer = 4: null;
    return answer;
}