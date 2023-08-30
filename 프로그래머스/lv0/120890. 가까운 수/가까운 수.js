function solution(array, n) {
    return array.sort((a, b) => {
        const A = Math.abs(a - n);
        const B = Math.abs(b - n);
        return A - B || a - b;
    })[0]; 
}