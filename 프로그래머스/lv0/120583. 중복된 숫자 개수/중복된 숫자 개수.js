function solution(array, n) {
    var answer = 0;
    return array.filter(num=>num===n).length;
}