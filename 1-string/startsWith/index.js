export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const totalNum = collection.filter(carNum => carNum.includes('粤A'));
  return totalNum.length;
}
