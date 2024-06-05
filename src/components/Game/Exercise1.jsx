import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export default function Exercise1() {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setGuessList([...guessList, guess]);
    console.log({ guess });
    setGuess("");
  }

  return (
    <>
      <div class="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
          <p key={index} className="guess">
            {range(5).map((char, index) => (
              <span key={index} className="cell">
                {guessList[num] ? guessList[num][char] : undefined}
              </span>
            ))}
          </p>
        ))}
      </div>
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
    </>
  );
}
