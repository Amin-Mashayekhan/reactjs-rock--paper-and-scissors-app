
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import Game from './components/Game'
import Header from './components/Header';
import Play from './components/Play'

import "./styles.scss";
const App = () => {
    const [myChoice, setMyChoice] = useState("")
    const [score, setScore] = useState(0)
    return (
        <React.Fragment>
            <div className="container">
                <Header score={score} />
                <Switch>
                    <Route exact path="/">
                        <Play setMyChoice={setMyChoice} />
                    </Route>
                    <Route path="/game">
                        <Game myChoice={myChoice} score={score} setScore={setScore} />
                    </Route>

                </Switch>

            </div>
            <footer>
                Coded by <a target="_blank" rel="noreferrer" href='https://github.com/MohammadAmin-Mashayekhan'>Mohammad amin Mashayekhan</a>
                <br />
                Guided by:<span> Digital Solutions Master</span>
            </footer>
        </React.Fragment>
    )
}

export default App;
