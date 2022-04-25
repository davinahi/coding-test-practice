/*testcode는 맞는데 0점*/
// function solution(a, b) {
//   let answer = [a, b];
//   answer.sort();

//   for (let i = 0; i < answer[1]; i++) {
//     if (answer[i] !== answer[i + 1]) {
//       if (answer[i] < answer[i + 1]) {
//         answer.push(answer[i] + 1);
//       }
//     } else {
//       answer[i] = 0;
//     }
//   }

//   const result = answer.reduce((a, b) => a + b, 0);
//   return result;
// }
// console.log(solution(3, 3));

//가우스법칙(다른사람코드)
function solution(a, b) {
  //   let answer = 0;
  let answer = ((a + b) * (Math.abs(a - b) + 1)) / 2;
  return answer;
}
console.log(solution(3, 3));
