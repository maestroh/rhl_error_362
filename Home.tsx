import * as React from 'react';

export interface state { counter: number; }

class Home extends React.Component<{}, state> {
  private interval: number;

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2>Countaer: {this.state.counter}</h2>
   );
  }
}

export default Home;
