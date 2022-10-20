import React, {useState} from "react";
import { useNavigate } from "react-router";
import './NewTodo.css'

const AddTodo = ({ addNewTodo }) => {

    const [newTodoDescription, setNewTodoDescription] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
       setNewTodoDescription(e.target.value)       
    }
    const handleSubmit = (e) => {
        //debería prevenir el comportamiento default de la forma?
        //esta función debería estar en el hook? que solo le mande la descripción y me arme el objeto?
        e.preventDefault()
        const todoToAdd = {
            description: newTodoDescription,
            isCompleted: false
        }
        addNewTodo(todoToAdd)
        navigate('/')
    }

    return (
        <div className="new-todo__container">
            <h4 className="new-todo__title">Añade un ToDo</h4>
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

export { AddTodo }