import React, { useContext, useState } from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import { AppContext } from "../../context/AppContext";
import './todoItem.css'


const TodoItem = ({todo}) => {

    const { todoFunctions } = useContext(AppContext)
    const [isBeingEdited, changeIsBeingEdited] = useState(false)
    const [description, setDescription] = useState(todo.description)

    const handleChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        todoFunctions.onEdit({
            id: todo.id, 
            newDescription: description
        })
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
                    onComplete={() => todoFunctions.onCompleted({id: todo.id})}/>
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
                <DeleteIcon onDelete={() => todoFunctions.onDelete({id: todo.id})}/>
                </div>
            </li>
        </>
    )
}

export { TodoItem }


