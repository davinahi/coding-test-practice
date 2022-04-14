function solution(nums) {
  var answer;
  let result = [];
  let getPoketmon = nums.length / 2;
  result.push(...new Set(nums));
  console.log(getPoketmon);
  console.log(result);
  if (getPoketmon <= result.length) {
    answer = getPoketmon;
  } else {
    answer = result.length;
  }
  return answer;
}
let nums = [3, 1, 2, 3];
console.log(solution(nums));
