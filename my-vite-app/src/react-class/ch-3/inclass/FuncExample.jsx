import React from "react";

//stateless
//Functional Components
function MyButton(props) {
  const { disabled, text } = props;
  return <button disabled={disabled}>{text}</button>;
}

//functional components
function FuncExample() {
  const object = {
    first: {
      text: "First Button",
      disabled: false,
    },
    second: {
      text: "Second Button",
      disabled: true,
    },
  };

  return (
    <>
      <MyButton disabled={object.first.disabled} text={object.first.text} />
      <MyButton disabled={object.second.disabled} text={object.second.text} />
    </>
  );
}

export default FuncExample;
