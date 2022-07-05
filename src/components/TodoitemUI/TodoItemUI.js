import React from "react";
import './todoItemUI.css'


const TodoItemUI = ({todo, onCompleted, onErased}) => {
    return (
        <li className="todoItem__container">
            <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {todo.description} </p>
            <div className="todoItem__icons">
                <i className={`completed-icon bi bi-check-circle${todo.isCompleted ? '-fill' : ''}`} alt="icono completar todo" onClick={onCompleted}></i>
                <i className="erase-icon bi bi-trash" alt="icono borrar todo" onClick={onErased}></i>
            </div>
        </li>
    )
}

export { TodoItemUI }