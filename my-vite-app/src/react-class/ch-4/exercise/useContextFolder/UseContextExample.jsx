  import React, { createContext, useState } from "react";

  export const ContextName = createContext();

  function UseContextExample({ children }) {
    const [username, setUsername] = useState("Chan Min Swe");

    return (
      <ContextName.Provider value={{ username, setUsername }}>
        {children}
      </ContextName.Provider>
    );
  }

  export default UseContextExample;
