export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码

  const contNum = Object.values(source);
  let sumNum = 0;
  for (let i = 0; i < contNum.length; i++) {
    const typeNum = new Number(contNum[i]);
    sumNum += typeNum;
  }
  return sumNum;
}
