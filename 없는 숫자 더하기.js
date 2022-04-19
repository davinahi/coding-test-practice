function solution(numbers) {
  let arr = [];
  let count = 0;

  for (let i = 0; i <= 9; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!numbers.includes(arr[i])) {
      count += arr[i];
    }
  }
  return count;
}
let nums = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(nums));
