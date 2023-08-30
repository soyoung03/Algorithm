const solution = (i, j, k) => {
    let count = 0;
    
    for(let start = i; start <= j; start ++){
        String(start).split("").forEach(el => el.includes(k) && count ++);
    }
    
    return count;
}