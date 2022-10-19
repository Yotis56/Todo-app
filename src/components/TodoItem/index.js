import React from "react";
import { useLocalStorage } from "../../hooks/UseLocalStorage";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( { todo } ) => {

    const {todoFunctions} = useLocalStorage()
    
    return (
        <TodoItemUI onCompleted={todoFunctions.onCompleted} onDelete={todoFunctions.onDelete} onEdit={todoFunctions.onEdit} todo={todo} />
          
    )
}

export { TodoItem }