import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default Game;
