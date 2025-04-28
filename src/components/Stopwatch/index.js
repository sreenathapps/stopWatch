import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedSeconds: 0,
  timeElapsedMinutes: 0,
}
class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <div className="bg-container">
        <div className="stopwatch-card">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-card"></div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
