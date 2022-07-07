import React from "react";
import './TodoList.css'

const TodoList = ( {list} ) => {
    return (
        <ul className="todolist-ul">
            {list()}
        </ul>
    )
}

export { TodoList }