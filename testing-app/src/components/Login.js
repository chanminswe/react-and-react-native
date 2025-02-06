import React, { useState } from "react";

function Login() {
  const [showInfo, setShowInfo] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email) {
      setError("Please fill out the forms");
      return;
    }

    setError("");
    setShowInfo(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <button type="submit" disabled={!name || !email}>
          Submit
        </button>
      </form>
      {error && <p>{error}!</p>}

      {showInfo && (
        <div>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
