//다른사람 코드 참고
function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) {
      result[0]++;
    }
    if (second[i % second.length] === answers[i]) {
      result[1]++;
    }
    if (third[i % third.length] === answers[i]) {
      result[2]++;
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < result.length; i++) {
    if (result[i] > max) {
      max = i + 1;
      answer.push(max);
    }
  }

  return answer;
}
let answers = [1, 2, 3, 4, 5]; //[1]
console.log(solution(answers));
