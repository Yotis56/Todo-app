import React, {useState} from "react";
import { useNavigate } from "react-router";
import './NewTodo.css'

const AddTodo = ({ submitAction, label, todo }) => {

    const [newTodoDescription, setNewTodoDescription] = useState( todo ? todo.description : '' )
    const navigate = useNavigate()

    const handleChange = (e) => {
       setNewTodoDescription(e.target.value)       
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo){
            const todoToAdd = {
                description: newTodoDescription,
                isCompleted: false
            }
            submitAction(todoToAdd)
        } else {
            submitAction(todo.id, newTodoDescription)
        }
        navigate('/')
    }

    return (
        <div className="new-todo__container">
            <h4 className="new-todo__title">{label}</h4>
            <form className='new-todo__form' onSubmit={handleSubmit}>
                <div className="new-todo__input-container">
                    <label htmlFor="description">Descripción del TODO</label>
                    <input type="text" name='description' id="description" value={newTodoDescription} onChange={handleChange}></input>
                </div>
                <button type="submit">{todo? 'Editar Todo' : 'Agregar Todo'}</button>
            </form>
        </div>
    )
}

export { AddTodo }