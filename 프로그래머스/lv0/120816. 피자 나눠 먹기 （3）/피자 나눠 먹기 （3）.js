function solution(slice, n) {
    var answer = 0;
    if(slice / n < 1) {
        answer = Math.ceil(n/slice);
    } 
    else if(slice / n > 1){
        answer = 1;
    }
    else {
        answer=slice/n;
    }
    return answer;
}