function solution(age) {
    let answer = '';
     let alpha = ['a','b','c','d','e','f','g','h','i','j'];
    age = age.toString();
    
    for (let i = 0; i < age.length; i++) {
        answer += alpha[age[i]];
    }
    return answer;
}