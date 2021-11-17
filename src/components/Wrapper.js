import React from "react";
import Buttons from "./Buttons";
import Screen from "./Screen";

class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      firstNum: "",
      secondNum: "",
      operator: "",
      display: "0",
    };
  }

  // updates display and secondNum
  handleNumber = (event) => {
    if (this.state.display === "0") {
      this.setState({
        display: event.target.value,
        firstNum: event.target.value,
      });
    } else {
      this.setState({
        display: (this.state.display += event.target.value),
        secondNum: (this.state.secondNum += event.target.value),
      });
    }
  };

  // function to use handleOperator and resets secondNum
  handleOperator = (event) => {
    // this.setState({ firstNum: this.state.display });
    let result =
      this.state.firstNum + event.target.value + this.state.secondNum;
    console.log(result, "result");
  };

  //   this.setState firstNum operator secondNum
  //   this.state.secondNum = operator
  //   what needs to change?
  // function for handleEquals
  // how do you shift the state when the operation changes?

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <Screen display={this.state.display} />
        <Buttons
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
        />
      </div>
    );
  }
}

export default Wrapper;
