import React from "react";

const TodoItemUI = ({todo, onCompleted, onErased}) => {
    return (
        <li className="todoItem__container">
            <p> {todo.description} </p> 
            <button onClick={onCompleted}>completed</button>
            <button onClick={onErased}>erase</button>
        </li>
    )
}

export { TodoItemUI }