function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const score = getScore(person.id);
  const tempStr = '你好，刘明！你的考试成绩为';
  return tempStr.concat(score).concat('分');
}
