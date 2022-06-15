import React, { useState } from "react";
import "./App.css";

function App() {

  const [people, setPeople] = useState([
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  

  return (
    <div className="App">
        <h2>Imputs y calculadora react</h2>
      <div className="prtOne">
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name="lastName"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
      </div>
      <div className="btnUl">
      <button
          onClick={() => {
            setPeople((current) => [{ name, lastName }, ...current]);
          }}
        >
          Add user
        </button>
        <ul>
          {people.map((person, idx) => (
            <li id={idx}>{`${person.name} ${person.lastName}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;