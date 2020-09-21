export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const collectionA = [1, 2, 3, 4, 5];
  const collectionB = ['a', 'b', 'c', 'd', 'e'];

  const map1 = collection.map(x => collectionB[collectionA.indexOf(x)]);
  return map1;
}
