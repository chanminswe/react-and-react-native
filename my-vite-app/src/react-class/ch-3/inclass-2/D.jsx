import { useContext } from "react";
import "./boxExample.css";
import { ContextName } from "./ContextExample";

export default function D() {
  const username = useContext(ContextName);

  return <div className="box">{username}</div>;
}

//prop drilling
