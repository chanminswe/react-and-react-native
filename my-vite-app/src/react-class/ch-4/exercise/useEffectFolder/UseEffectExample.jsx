import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  //side effect hooks
  //inline function

  useEffect(() => {
    console.log("Use Effect Rendered");
  }, [isTrue, count]);

  //3 variations

  {
    /* 
    1.useEffect(() => {
    console.log("Use Effect Rendered");
  });

   2.useEffect(() => {
    console.log("Use Effect Rendered");
  }, []);

   3.useEffect(() => {
    console.log("Use Effect Rendered");
  }, [ count]);
    */
  }

  return (
    <div>
      <GetUser />
    </div>
  );
}

//function
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 1000);
  });
}

//functional Component
function GetUser() {
  const [id, setId] = useState("loading ....");
  const [name, setName] = useState("loading ....");

  useEffect(() => {
    fetchUser()
    .then(userInfo => {
      setId(userInfo.id);
      setName(userInfo.name);
    })
  })
  return <div>
    <p>{id}</p>
    <p>{name}</p>
  </div>;
}

export default UseEffectExample;
