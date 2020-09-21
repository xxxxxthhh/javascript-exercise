// TODO 9: 在这里写实现代码

export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  introduce() {
    // My name is Tom. I am 21 years old.
    const intro = ['My name is ', this.name, '. I am ', this.age, ' years old.'];
    return intro.join('');
  }
}
