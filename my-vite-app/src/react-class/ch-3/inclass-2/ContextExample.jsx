import React, { createContext } from "react";
import "./boxExample.css";
import A from "./A";

export const ContextName = createContext();

function ContextExample() {
  let username = "Chan";
  return (
    <div>
      <ContextName.Provider value={username}>
        <A />
      </ContextName.Provider>
    </div>
  );
}

export default ContextExample;
