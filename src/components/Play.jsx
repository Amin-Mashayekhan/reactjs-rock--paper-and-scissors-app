import { Link } from 'react-router-dom'
import React from 'react'

const Play = ({setMyChoice}) => {
    
    const setChoice = (e) =>{
        setMyChoice(e.target.dataset.id);
    }
    return (
        <div className='play'>
            <Link to="/game">
                <div data-id="paper" className="icon icon-paper" onClick={setChoice}>
                    Paper
                </div>
            </Link>
            <Link to="/game">
                <div data-id="scissors" className="icon icon-scissors" onClick={setChoice}>
                    Scissors
                </div>
            </Link>
            <Link to="/game">
                <div data-id="rock" className="icon icon-rock" onClick={setChoice}>
                    Rock
                </div>
            </Link>
        </div>
    )
}

export default Play