function solution(hp) {
    var answer = 0;
  let five = ~~(hp / 5);
   let three = ~~((hp - 5 * five) / 3);
    let one = ~~(hp - 5 * five -  3 * three);
    return five + three + one;
}