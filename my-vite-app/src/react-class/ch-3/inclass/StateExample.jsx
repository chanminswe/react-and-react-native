import React, { Component } from "react";

export default class StateExample extends Component {
  state = {
    first: false,
    second: true,
    third: "whatever",
    name: "Chan Min Swe",
    age: 23,
  };

  render() {
    const { first, second, third, name, age } = this.state;

    setTimeout(() => {
      this.setState({
        first: true,
        second: false,
        name: "Ye Yint Myint",
        age: 22,
      });
    }, 3000);

    return (
      <>
        <main>
          <section>
            <button disabled={first}>MyFirstButton</button>
          </section>
          <section>
            <button disabled={second}>MySecondButton</button>
          </section>
          <p>
            My name is {name} , {age} years old , {third}!
          </p>
        </main>
      </>
    );
  }
}

export function FunctionalState() {
  const object = {
    first: true,
    second: false,
  };

  return (
    <>
      <main>
        <section>
          <button disabled={object.first}>MyFirstButton</button>
        </section>
        <section>
          <button disabled={object.second}>MySecondButton</button>
        </section>
      </main>
    </>
  );
}
