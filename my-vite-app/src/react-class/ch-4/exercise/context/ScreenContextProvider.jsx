import React, { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

function ScreenContextProvider({ children }) {


  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useEffect(() => {
    function sizeAdjust() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", sizeAdjust);

    return () => {
      window.removeEventListener("resize", sizeAdjust);
    };
  });

  return (
    <ScreenContext.Provider value={{ screenSize }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenContextProvider;
