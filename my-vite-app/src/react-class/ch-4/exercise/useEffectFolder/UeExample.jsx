import React, { useEffect, useState } from "react";

{
  /* 

*side effects
Event trigger
api call
    
*/
}
function UeExample() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  useEffect(() => {
    //functionality
    // to resize
    function screenResize() {
      console.log("Event occured!");

      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", screenResize);
    //event remove
    //clean up
    return () => {
      window.removeEventListener("resize", screenResize);
    };
  }, []);

  return (
    <div>
      <p>Width : {screenSize.screenWidth}</p>
      <p>Height : {screenSize.screenHeight}</p>
    </div>
  );
}

export default UeExample;
