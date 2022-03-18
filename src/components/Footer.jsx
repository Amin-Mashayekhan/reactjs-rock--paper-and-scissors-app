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
                    Challenge by {" "} 
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                        Frontend Mentor
                    </a>
                    . Coded by <a href="#">Amin Mashayekhan</a>.
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
