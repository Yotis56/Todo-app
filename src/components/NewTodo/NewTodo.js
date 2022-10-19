import React, {useState} from "react";
import closeIcon from '../../assets/x-circle.svg'
import './NewTodo.css'

const NewTodo = ({ setOpenModal, manageTodos, noOfTodos }) => {

    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleChange = (e) => {
       setNewTodoDescription(e.target.value)       
    }
    const handleSubmit = () => {
        //debería prevenir el comportamiento default de la forma?
        const todoToAdd = {
            id: noOfTodos + 1,
            description: newTodoDescription,
            isCompleted: false
        }
        manageTodos(todoToAdd)
    }
    const [newTodoDescription, setNewTodoDescription] = useState('')

    return (
        <div className="new-todo__container">
            <h4 className="new-todo__title">Añade un ToDo</h4>
            <img src={closeIcon} className='close-icon' alt="" onClick={handleCloseModal} />
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