import { Link } from 'react-router-dom'
import React from 'react'
import Triangle from "../assets/images/bg-triangle.svg";

const Play = ({setMyChoice}) => {
    
    const setChoice = (e) =>{
        setMyChoice(e.target.dataset.id);
    }
    return (
        <div className='play'>
            <img src={Triangle} alt="" className="triange" />
            <div className="items">
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
        </div>
    )
}

export default Play