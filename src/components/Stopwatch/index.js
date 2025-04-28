import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedSeconds: 0,
}
class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  getTimeElapsedSecondsInTimeFormat = () => {
    const {timeElapsedSeconds} = this.state

    const timeElapsedMinutes = Math.floor(timeElapsedSeconds / 60)
      .toString()
      .padStart(2, '0')
    const timeElapsedSec = (timeElapsedSeconds % 60).toString().padStart(2, '0')

    return `${timeElapsedMinutes}:${timeElapsedSec}`
  }

  incrementTimeElapsedSeconds = () => {
    this.setState(prevState => {
      const {timeElapsedSeconds} = prevState
      return {
        timeElapsedSeconds: timeElapsedSeconds + 1,
      }
    })
  }

  onClickStart = () => {
    const {isTimerRunning} = this.state

    if (!isTimerRunning) {
      this.intervalId = setInterval(this.incrementTimeElapsedSeconds, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  onClickReset = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  onClickStop = () => {
    const {isTimerRunning} = this.state

    if (isTimerRunning) {
      this.clearTimeInterval()
      this.setState({isTimerRunning: false})
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="stopwatch-card">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="timer-heading-box">
              <img
                className="time-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="time-count">
              {this.getTimeElapsedSecondsInTimeFormat()}
            </h1>
            <div className="buttons-container">
              <button
                className="success button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="danger button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="secondary button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
