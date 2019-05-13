import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "a",
      b: "b"
    }
  }

  onClick = () => {
    this.setState((state) => {
      return {a: "0"}
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.a}___{this.state.b}</p>
        <button onClick={this.onClick}>CLICK</button>
      </div>
    )
  }
}