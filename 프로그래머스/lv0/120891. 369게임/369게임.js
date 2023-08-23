function solution(order) {
    let count = 0;
    
    for (; order > 0; order = Math.floor(order / 10)) {
        let game = order % 10;
        if ([3, 6, 9].includes(game)) {
            count++;
        }
    }
    return count;
}