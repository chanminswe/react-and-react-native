import React from "react";

function PropVald({ props }) {
  const { myString, myNumber, myBool, myFunc, myArray, myObject } = props;
  return (
    <section>
      <p>{myString}</p>
      <p>{myNumber}</p>
      <p>
        <input type="checkbox" defaultChecked={myBool} />
      </p>
      <p>{myFunc()}</p>
      <ul>
        {myArray.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p>{myObject.myProp}</p>
    </section>
  );
}



export default PropVald;
