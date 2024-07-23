import { useState, useRef } from "react";

export default function Player() {
  //Ref
  const playerName = useRef();

  // State
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function setNameHandler() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Chronos (God of Time)"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
