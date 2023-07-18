function solution(array) {
    var answer = 0;
    let sort=array.sort(function(a, b) { 
    return a - b});
    return sort[Math.trunc(sort.length/2)];
}