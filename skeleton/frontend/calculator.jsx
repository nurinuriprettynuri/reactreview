import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.setNum1 = this.setNum1.bind(this);
  }

  setNum1() {
    return e => this.setState({ value: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.setNum1()} />
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}

export default Calculator;
