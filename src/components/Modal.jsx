import React from 'react'
import ReactDOM from 'react-dom';
import close from '../assets/images/icon-close.svg';
import rules from '../assets/images/image-rules.svg';


const Modal = ({toggle}) => {
    return (
        ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal-box">
                    <div className="modal-header">
                        <h1>Rules</h1>
                        <button onClick={toggle}>
                            <img src={close} alt="Close"  />
                        </button>
                    </div>
                    <img src={rules} alt="Rules" />
                </div>
            </div>
            ,
            document.getElementById("modal")  
        )
    )
}

export default Modal
 