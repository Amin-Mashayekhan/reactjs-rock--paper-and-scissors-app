import React, { useEffect, useState } from 'react'

const Game = ({ score, myChoice, setScore }) => {

    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random() * 3)]);
    }
    useEffect(() => {
        newHousePick();
    }, []);

    const Result = () => {
        if (myChoice === "rock" && house === "scissors") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "rock" && house === "paper") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("lose");
            setScore(score + 1);
        } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("lose");
            setScore(score + 1);
        } else {
            setPlayerWin("draw");
        }
    }
    return (
        <div className="game">
            my choice: {myChoice} <br />
            House choice: {house}
            Result:
            {playerWin === "win" && <h2>You win</h2>}
            {playerWin === "lose" && <h2>You lose</h2>}
            {playerWin === "draw" && <h2>Draw</h2>}
        </div> 
    )
}

export default Game
