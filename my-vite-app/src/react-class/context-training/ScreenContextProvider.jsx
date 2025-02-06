import React, { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

function ScreenContextProvider({ children }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    //function to resize the screen width / height
    function screenResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    //add event listener
    window.addEventListener("resize", screenResize);

    //clean up
    return () => {
      window.removeEventListener("resize", screenResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screenSize }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenContextProvider;
