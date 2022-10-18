import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import './todoItemUI.css'


const TodoItemUI = ({todo, onCompleted, onErased, onEdit}) => {
    return (
        <>
            <li className="todoItem__container">
                <CompleteIcon completed={todo.isCompleted} onComplete={onCompleted}/>
                <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {todo.description} </p>
                <div className="todoItem__icons">
                <EditIcon onEdit={onEdit}/>
                <DeleteIcon onDelete={onErased}/>
                </div>
            </li>
        </>
    )
}

export { TodoItemUI }

{/* <i className={`completed-icon bi bi-check-circle${todo.isCompleted ? '-fill' : ''}`} alt="icono completar todo" onClick={onCompleted}></i> */}
{/* <i className="erase-icon bi bi-trash" alt="icono borrar todo" onClick={onErased}></i> */}
