import React, { Component } from "react";

function Lotteria() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Fried Chicken", "Pepsi", "Burger"]);
    }, 5000);
  });
}

export class PrrExample extends Component {
  state = {
    foodOrder: [],
  };

  componentDidMount() {
    Lotteria().then((foodOrder) => this.setState({ foodOrder }));
  }

  render() {
    const { foodOrder } = this.state;

    return (
      <>
        {foodOrder.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </>
    );
  }
}

export default PrrExample;
