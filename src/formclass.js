import React, { Component } from "react";
import InputText from "./components/input";
import Button from "./components/button";
import Checkbox from "./components/checkbox";

class Form extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { myInputValue: "", tasksList: [] };
  }

  componentDidMount() {
    this.setState({ tasksList: ["T1"] });
  }

  setMyInputValue = myInputValue => {
    this.setState({ myInputValue });
  };

  setTasksList = tasksList => {
    this.setState({ tasksList });
  };

  render() {
    return (
      <div>
        <InputText
          myInputValue={this.state.myInputValue}
          setmyinputvalue={this.setMyInputValue}
          placeholder="Task..."
        />
        <Button
          onClick={() => {
            this.setTasksList([
              ...this.state.tasksList,
              this.state.myInputValue
            ]);
          }}
        >
          ADD
        </Button>
        <ul>
          {this.state.tasksList.map(element => {
            return (
              <li key={element}>
                <Checkbox element={element} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Form;
