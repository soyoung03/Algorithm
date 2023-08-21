function solution(my_string) {
    let numbers = Array.from(my_string).filter(char => !isNaN(char)).map(Number);
    numbers.sort((a, b) => a - b);
    
    return numbers;
}