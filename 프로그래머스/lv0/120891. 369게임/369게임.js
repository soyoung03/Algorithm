function solution(order) {
    let count = 0;
    
    for (; order > 0; order = Math.floor(order / 10)) {
        let remainder = order % 10;
        if ([3, 6, 9].includes(remainder)) {
            count++;
        }
    }
    return count;
}