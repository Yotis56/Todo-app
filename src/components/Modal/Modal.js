import React from "react";
import ReactDOM  from "react-dom";

import './Modal.css'

const Modal = ({ children, setOpenModal }) => {
    const handleClick = (e) => {
        if (e.target.className === 'modal-background'){
            setOpenModal(false)
        }
    }

    return ReactDOM.createPortal(
        <div className="modal-background" onClick={handleClick}>
            {children} 
        </div>
        , document.getElementById('modal-root')
    )
}

export { Modal }