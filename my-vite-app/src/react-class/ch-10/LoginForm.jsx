import React, { useState } from "react";
import "./loginform.css";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const sendRequest = await axios.post("localhost://8080/api/auth", {
      username,
      password,
    });

    console.log(sendRequest.message);
  }

  return (
    <div className="page-container">
      <form onSubmit={handleLogin} className="form-container">
        <label className="form-label">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <label className="form-label">Password</label>
        <input
          value={password}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
