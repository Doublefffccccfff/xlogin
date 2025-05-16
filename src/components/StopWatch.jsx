import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0, // time in seconds
      isRunning: false,
    };
    this.interval = null;
  }

  formatTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(1, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  }

  start = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  reset = () => {
    clearInterval(this.interval);
    this.setState({ time: 0, isRunning: false });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time, isRunning } = this.state;

    return (
      <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
        <h2>Stopwatch</h2>
        <h1>Time: {this.formatTime(time)}</h1>
        <button onClick={this.start} disabled={isRunning}>Start</button>
        <button onClick={this.stop} disabled={!isRunning}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
