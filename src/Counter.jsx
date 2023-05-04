import React, { useState } from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [gameStatus, setGameStatus] = useState("");
  let [lastPlay, setLastPlay] = useState("");

  const handleAttack = () => {
    let newCount = count + Math.round(Math.random() * 10);
    setCount(newCount);
    setGameStatus(newCount > 10 ? "You won" : gameStatus);
    setLastPlay("Attack");
  };
  const handleDefence = () => {
    let newCount = count - Math.round(Math.random() * 10);
    setCount(newCount);
    setGameStatus(newCount < -10 ? "You lose" : gameStatus);
    setLastPlay("Defence");
  };

  const handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      handleAttack();
    } else {
      handleDefence();
    }
  };

  const handleReset = () => {
    setCount(0);
    setGameStatus("");
    setLastPlay("");
  };

  return (
    <div className="text-white text-center">
      <h1>Game score : {count}</h1>
      <p>You win at +10 points and lose on -10 points</p>
      <p>Let's play: {lastPlay}</p>
      <h3>Game status :{gameStatus} </h3>

      <div className="d-flex justify-content-center">
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={handleAttack}></img>
        </div>
        <div className="col-6 col-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={handleDefence}></img>
        </div>
      </div>
      <div className="col-12 col-md-4 offset-md-4">
        <button
          className="btn btn-secondary w-100 mt-2"
          onClick={handleRandomPlay}>
          Random Play
        </button>
        <br />
        <button className="btn btn-warning w-100 mt-2" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Counter;
