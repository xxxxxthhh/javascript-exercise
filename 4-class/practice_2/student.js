// TODO 11: 在这里写实现代码
import person from './person';

export default class Student extends person {
  constructor(name, age, classNum) {
    super(name, age);
    this.class = classNum;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.class}.`;
  }
}
