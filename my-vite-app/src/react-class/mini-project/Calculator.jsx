import React, { useEffect, useState } from "react";
import "./calculator.css";

function Calculator() {
  const [ourNumber, setOurNumber] = useState("");
  const [savedNumber, setSavedNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);
  const [calculateNumber, setCalculateNumber] = useState(0);

  function addFunction(event) {
    event.preventDefault();
    if (savedNumber === 0) {
      setSavedNumber(Number(ourNumber));
      setOurNumber("");
    } else {
      setNewNumber(Number(ourNumber));
      setSavedNumber(savedNumber + newNumber);
      setNewNumber(0);
      setOurNumber("");
    }
  }

  function calculate(event) {
    event.preventDefault();
    if (newNumber === 0) {
      setCalculateNumber(savedNumber);
      setOurNumber(String(calculateNumber));
      setSavedNumber(0);
    } else {
      setCalculateNumber(savedNumber + newNumber);
      setOurNumber(String(calculateNumber));
      setSavedNumber(0);
      setOurNumber(0);
    }
  }

  useEffect(() => {
    console.log("Saved Number" + savedNumber);
    console.log("New Number" + newNumber);
    console.log("calculateNumber" + calculateNumber);
  }, [ourNumber]);

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="input-container">
          <input value={ourNumber} className="input-styling" />
        </div>
        <div className="number-container">
          {/*For operators*/}
          <NumberBox operator="+" clickFunction={addFunction} />
          <NumberBox operator="-" />
          <NumberBox operator="x" />
          <NumberBox operator="clear" clickFunction={() => setOurNumber("")} />
          <NumberBox operator="=" clickFunction={calculate} />

          {/*For Numbers*/}
          <NumberBox
            operator="1"
            clickFunction={() => setOurNumber(ourNumber + "1")}
          />
          <NumberBox
            operator="2"
            clickFunction={() => setOurNumber(ourNumber + "2")}
          />
          <NumberBox
            operator="3"
            clickFunction={() => setOurNumber(ourNumber + "3")}
          />
          <NumberBox
            operator="4"
            clickFunction={() => setOurNumber(ourNumber + "4")}
          />
          <NumberBox
            operator="5"
            clickFunction={() => setOurNumber(ourNumber + "5")}
          />
          <NumberBox
            operator="6"
            clickFunction={() => setOurNumber(ourNumber + "6")}
          />
          <NumberBox
            operator="7"
            clickFunction={() => setOurNumber(ourNumber + "7")}
          />
          <NumberBox
            operator="8"
            clickFunction={() => setOurNumber(ourNumber + "8")}
          />
          <NumberBox
            operator="9"
            clickFunction={() => setOurNumber(ourNumber + "9")}
          />
          <NumberBox
            operator="0"
            clickFunction={() => setOurNumber(ourNumber + "0")}
          />
        </div>
      </div>
    </div>
  );
}

function NumberBox({ clickFunction, operator }) {
  return (
    <div onClick={clickFunction} className="number-box">
      <h2>{operator}</h2>
    </div>
  );
}

export default Calculator;
