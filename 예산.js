function solution(d, budget) {
  var answer = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if ((answer += d[i]) <= budget) {
      count++;
    }
  }

  return count;
}
let d = [2, 2, 3, 3];
console.log(solution(d, 10));
