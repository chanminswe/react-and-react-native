import React, { Component } from "react";

class MyButton extends Component {
  //if button component called without parameter
  //default values are sent!
  static defaultProps = {
    disabled: false,
    text: "My Button",
  };

  render() {
    // paramter accepted , disabled , text
    const { disabled, text } = this.props;

    return <button disabled={disabled}> {text}</button>;
  }
}

class LoopList extends Component {
  render() {
    const { myList } = this.props;
    return (
      <>
        {myList.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </>
    );
  }
}

export class PropExample extends Component {

  state = {
    myList: ["First", "Second", "Third"],
  };

  render() {
    return (
      <>
        {/* paramter sent : disabled , text */}
        <MyButton disabled={true} text="With Paramter" />
        <LoopList myList={this.state.myList} />
      </>
    );
  }
}

export default PropExample;
