import React, { act, useEffect, useState } from "react";

//Cross Origin Resource Sharing
//backend api limit bl network lar access

function ApiExample() {
  const key = "SJ8DFYUKU6X4Z7NZGZM98C9EN&contentType=json";
  const [cityname, setCityName] = useState("");
  const [forecast, setForeCast] = useState([]);
  const [count, setCount] = useState(0);

  function getAPI() {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?unitGroup=metric&key=${key}`
    )
      .then((response) => response.json())
      .then((actualResponse) => {
        setForeCast(actualResponse);
        setCount(count + 1);
      })
      .catch((error) => console.log("Bad url"));

    console.log("onClick Triggered!");
  }

  useEffect(() => {}, [count]);

  return (
    <div>
      {count >= 1 ? (
        <div> {forecast.currentConditions.icon}</div>
      ) : (
        <div>No ForeCast </div>
      )}
      <input
        value={cityname}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter City Name"
      />
      <button onClick={getAPI}>Get API</button>
    </div>
  );
}

export default ApiExample;
