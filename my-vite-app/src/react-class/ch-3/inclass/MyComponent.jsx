import React, { Component } from "react";

export class MyComponent extends Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    doneMessage: "finished!",
  };

  render() {
    const { state } = this;

    setTimeout(() => {
      this.setState({
        first: "Done!",
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        second: "Done!",
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        third: "Done!",
      });
    }, 4000);

    setTimeout(() => {
      //present State
      this.setState((prevState) => ({
        ...prevState,
        fourth: state.doneMessage,
      }));
    });

    return (
      <>
        <p>{state.first}</p>
        <p>{state.second}</p>
        <p>{state.third}</p>
        <p>{state.fourth}</p>

        <ul>
          {Object.keys(state)
            .filter((key) => key !== "doneMessage")
            .map((i) => (
              <li key={i}>{i}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default MyComponent;
