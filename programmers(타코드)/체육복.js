//다른사람 풀이 참고
function solution(n, lost, reserve) {
  var answer = 0;
  let uniform = [];

  for (let i = 0; i < n; i++) {
    uniform[i] = 1;
  }

  for (let i = 0; i < lost.length; i++) {
    uniform[lost[i] - 1] = 0;
  }

  for (let i = 0; i < reserve.length; i++) {
    uniform[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < uniform.length; i++) {
    if (uniform[i] === 0 && uniform[i - 1] === 2) {
      uniform[i - 1] = 1;
      uniform[i] = 1;
    } else if (uniform[i] === 0 && uniform[i + 1] === 2) {
      uniform[i + 1] = 1;
      uniform[i] = 1;
    }
  }

  for (let x of uniform) {
    if (x > 0) {
      answer++;
    }
  }
  console.log(uniform);

  return answer;
}

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));
