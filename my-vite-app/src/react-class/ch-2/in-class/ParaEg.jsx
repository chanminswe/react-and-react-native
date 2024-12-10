import React from "react";

export default class ParaEg extends React.Component {
  render() {
    const enabled = true;
    const name = "Chan";
    
    

    /* 
    sout ("Hello") 
    var greetings = "Hello";
    sout (greetings)
    */
    return (    
      <section>
        <p>Greetings {name}</p>
        <button disabled={enabled}>Click!</button>
      </section>
    );
  }
}
