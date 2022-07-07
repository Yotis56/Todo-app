import React from "react";
import './todoItemUI.css'


const TodoItemUI = ({todo, onCompleted, onErased}) => {
    return (
        <>
            <li className="todoItem__container">
                <i className={`completed-icon bi bi-check-circle${todo.isCompleted ? '-fill' : ''}`} alt="icono completar todo" onClick={onCompleted}></i>
                <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {todo.description} </p>
                <div className="todoItem__icons">
                    
                    <i className="erase-icon bi bi-trash" alt="icono borrar todo" onClick={onErased}></i>
                </div>
            </li>
        </>
    )
}

export { TodoItemUI }