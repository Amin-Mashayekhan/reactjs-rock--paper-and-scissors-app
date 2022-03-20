import React, { useState } from 'react';
import Modal from './Modal';
const Footer = () => {
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal);
    }


    return (
        <React.Fragment>
            <footer className="footer">
                <div className="attribution">
                    Coded by <a href="https://github.com/Amin-Mashayekhan" target="_blank" rel="noreferrer">Amin Mashayekhan</a>.
                    Guided by CodeBucks.
                    <p>Challenge by {" "} Frontend Mentor. </p>
                    
                </div>
                <button onClick={toggle} className="rules">
                    Rules
                </button>
            </footer>
            {
                modal && (
                    <Modal toggle={toggle} />
                )
            }
        </React.Fragment>
    )
}

export default Footer
