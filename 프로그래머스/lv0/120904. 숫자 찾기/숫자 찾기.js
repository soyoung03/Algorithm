function solution(num, k) {
  let strNum = num.toString();
    let strK = k.toString();

    for(let i = 0; i < strNum.length; i++) {
        if(strNum[i] === strK) {
            return i + 1;  
        }
    }
    return -1;  
}

