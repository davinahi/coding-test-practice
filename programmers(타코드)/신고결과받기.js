function solution(id_list, report, k) {
  let answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {};

  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (let key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  //   console.log(report_list);

  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;
//[2,1,1,0] 각 유저별로 처리 결과 메일을 받은 횟수
console.log(solution(id_list, report, k));
