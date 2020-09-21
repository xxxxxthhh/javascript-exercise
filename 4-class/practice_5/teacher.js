// TODO 20: 在这里写实现代码
import person from './person';

export default class Teacher extends person {
  constructor(name, age, classNum) {
    super(name, age);
    this.klass = classNum;
  }

  // const introStr = super.basicIntroduce;

  introduce() {
    if (this.klass) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
