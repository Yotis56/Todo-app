import React from "react";
import './todoItemUI.css'

const TodoItemUI = ({todo, onCompleted, onErased}) => {
    return (
        <li className="todoItem__container">
            <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {todo.description} </p> 
            <button onClick={onCompleted}>completed</button>
            <button onClick={onErased}>erase</button>
        </li>
    )
}

export { TodoItemUI }