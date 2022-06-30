import React from "react";
import closeIcon from '../../assets/x-circle.svg'

const NewTodo = ({ setOpenModal }) => {

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <div className="new-todo__container">

            <img src={closeIcon} className='close-icon' alt="" onClick={handleCloseModal} />
        </div>
    )
}

export { NewTodo }