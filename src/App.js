import React, { useState } from "react";
import "./App.css";

function App() {

  const [people, setPeople] = useState([
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  const [number, setNumber] = useState({ counter: 0, });
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");

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
      <div className="prtTwo">
        <input
          type="number"
          name="numOne"
          onChange={(event) => {
            setNumOne(event.target.value);
          }}
        />
        <input
          type="number"
          name="numTwo"
          onChange={(event) => {
            setNumTwo(event.target.value);
          }}
        />
       <div className="btns">
       <button>
          Sumar
        </button>
        <button>
          Restar
        </button>
        <button>
          Multiplicar
        </button>
        <button>
          Dividir
        </button>
       </div>
        <h1 className="text">Result: {number.counter}</h1>
      </div>
    </div>
  );
}

export default App;