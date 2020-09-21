// TODO 14: 在这里写实现代码
import person from './person';

export default class Worker extends person {
  introduce() {
    const introStr = super.introduce();
    return introStr.concat(' I am a Worker. I have a job.');
  }
}
