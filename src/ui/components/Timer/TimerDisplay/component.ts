import Component, { tracked } from '@glimmer/component';

export default class TimerDisplay extends Component {
  @tracked('args')
  get timerValue() {
    return this.args.timerValue;
  }
}
