export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const user00 = collection.find(user => user.age < 20);
  return user00.name;
}
