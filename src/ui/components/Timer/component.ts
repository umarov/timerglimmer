import Component, { tracked } from '@glimmer/component';

export default class Timer extends Component {
  @tracked public timerValue = 0;
  private intervalId: number;

  private worker = new Worker('worker.js');

  public didInsertElement() {
    this.worker.addEventListener('message', (event) => {
      this.timerValue = event.data;
    });
  }

  public startTimer() {
    this.worker.postMessage({ startTimer: true });
  }

  public stopTimer() {
    this.worker.postMessage({ endTimer: true });
  }

  public destroy() {
    this.stopTimer();
  }
}
