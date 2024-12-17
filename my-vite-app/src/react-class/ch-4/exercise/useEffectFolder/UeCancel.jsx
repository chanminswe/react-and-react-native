import React, { useEffect, useState } from "react";
import { Promise } from "bluebird";

Promise.config({ cancellation: true });

function fetchUser() {
  console.count("fetching user");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Chan" });
    }, 3000);
  });
}

function UeCancel() {
  const [id, setId] = useState("...loading");
  const [name, setName] = useState("...loading");

  useEffect(() => {
    const promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });

    return () => {
      console.log("Promise Canceled");
      promise.cancel();
    };
  }, []);

  return (
    <div>
      <p>Id : {id} </p>
      <p>Username : {name}</p>
    </div>
  );
}

export default UeCancel;

// npm install bluebird
