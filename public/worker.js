const timer = () => {
  let timerId
  let timerValue = 0

  return {
    startTimer() {
      if (timerId) {
        this.endTimer()
      }

      timerId = setInterval(() => {
        postMessage(++timerValue)
      }, 0)
    },
    endTimer() {
      clearInterval(timerId)
    }
  }
}

let currentTimer = timer()

addEventListener('message', ({ data }) => {
  if (data.startTimer) {
    currentTimer.startTimer()
  } else {
    currentTimer.endTimer()
  }
})
