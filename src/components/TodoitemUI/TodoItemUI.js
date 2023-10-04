import React, { useState } from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import './todoItemUI.css'


const TodoItemUI = ({todo, onCompleted, onDelete, onEdit}) => {
    const [isBeingEdited, changeIsBeingEdited] = useState(false)
    const [description, setDescription] = useState(todo.description)

    const handleChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onEdit(todo.id, description)
        changeIsBeingEdited(false)
    }
    const handleEdit = () => {
        changeIsBeingEdited(true)
    }

    return (
        <>
            <li className="todoItem__container">
                <CompleteIcon 
                    completed={todo.isCompleted} 
                    onComplete={() => onCompleted(todo.id)}/>
                {
                    isBeingEdited ? 
                    <div className="edit__container">
                        <input value={description} onChange={handleChange}></input>
                        <button type="submit" onClick={handleSubmit}>Listo</button>
                    </div> :
                    <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {description} </p>

                }
                <div className="todoItem__icons">
                <EditIcon onEdit={handleEdit}/>
                <DeleteIcon onDelete={() => onDelete(todo.id)}/>
                </div>
            </li>
        </>
    )
}

export { TodoItemUI }


