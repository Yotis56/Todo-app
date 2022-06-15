import React from "react";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( {todo, todos, manageTodos} ) => {

    // repito código. Cada componente tiene lo mismo
    const onCompleted= () => {
        const index = todos.findIndex( item => item === todo )
        const newArray = [...todos]
        if (index !== -1){
            newArray[index].isCompleted = !newArray[index].isCompleted
            manageTodos('save', newArray)
        }
    }
    const onErased = () => {
        const index = todos.findIndex( item => item === todo )
        const newArray = [...todos]
        if (index !== -1){
            newArray.splice(index,1)
            manageTodos('save', newArray)
        }
    }

    return (
        <TodoItemUI onCompleted={onCompleted} onErased={onErased} todo={todo} />
          
    )
}

export { TodoItem }