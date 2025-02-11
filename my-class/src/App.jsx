import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  
  const isOnline = useOnlineStatus();

  function handleClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleClick}>
      {isOnline ? "Save Progress" : "Reconnecting..."}
    </button>
  );
}

function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}

export default App;
