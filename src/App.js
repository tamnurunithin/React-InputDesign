import "./styles.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [heading, setHeading] = useState("");

  function handleFirstNameChange(event) {
    setName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit() {
    setHeading(`${name} ${lastName}`);
  }

  return (
    <div className="container">
      <h1 className="heading">Hello {heading}</h1>
      <input
        className="input-field"
        onChange={handleFirstNameChange}
        value={name}
        type="text"
        placeholder="Enter First Name"
      />
      <input
        className="input-field"
        onChange={handleLastNameChange}
        value={lastName}
        type="text"
        placeholder="Enter Last Name"
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
