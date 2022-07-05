import React from "react";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( { todoId, todos, manageTodos} ) => {

    // repito código. Cada componente tiene lo mismo
    const selectedTodo = todos.find( todo => todo.id === todoId )

    const onCompleted = () => {
        const index = todos.findIndex( item => item === selectedTodo )
        const newArray = [...todos]
        if (index !== -1){
            newArray[index].isCompleted = !newArray[index].isCompleted
            manageTodos('save', newArray)
        }
    }
    const onErased = () => {
        const index = todos.findIndex( item => item === selectedTodo )
        const newArray = [...todos]
        if (index !== -1){
            newArray.splice(index,1)
            manageTodos('save', newArray)
        }
    }
    
    return (
        <TodoItemUI onCompleted={onCompleted} onErased={onErased} todo={selectedTodo} />
          
    )
}

export { TodoItem }