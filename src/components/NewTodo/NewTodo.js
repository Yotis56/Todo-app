import React, {useContext, useState} from "react";
import CloseIcon from '../../assets/x-circle.svg'
import './NewTodo.css'
import { AppContext } from "../../context/AppContext";

const NewTodo = ({ setOpenModal }) => {

    const { todoFunctions } = useContext(AppContext)
    const [newTodoDescription, setNewTodoDescription] = useState('')
    
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleChange = (e) => {
       setNewTodoDescription(e.target.value)       
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newItem = {
            description: newTodoDescription,
            isCompleted: false
        }
        todoFunctions.saveTodo({newItem})
        setOpenModal(false)
    }

    return (
        <div className="new-todo__container">
            <h4 className="new-todo__title">Añade un ToDo</h4>
            <CloseIcon className='close-icon' alt="" onClick={handleCloseModal} />
            <form className='new-todo__form' onSubmit={handleSubmit}>
                <div className="new-todo__input-container">
                    <label htmlFor="description">Descripción del TODO</label>
                    <input type="text" name='description' id="description" value={newTodoDescription} onChange={handleChange}></input>
                </div>
                <button type="submit">Agregar ToDo</button>
            </form>
        </div>
    )
}

export { NewTodo }