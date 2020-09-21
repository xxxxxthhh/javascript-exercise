function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代
  const MultiNum = collection.filter(num => num % 3 === 0);
  return MultiNum;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return [...new Set(collection)];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
