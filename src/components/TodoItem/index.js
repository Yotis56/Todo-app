import React from "react";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( { todo, todoFunctions } ) => {

    return (
        <TodoItemUI onCompleted={todoFunctions.onCompleted} onDelete={todoFunctions.onDelete} onEdit={todoFunctions.onEdit} todo={todo} />
          
    )
}

export { TodoItem }