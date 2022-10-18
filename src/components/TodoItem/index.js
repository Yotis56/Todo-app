import React from "react";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( { todoId, todos, manageTodos} ) => {

    // repito código. Cada componente tiene lo mismo
    // una idea. Solo renderizar un componente TodoItem y dentro poner la iteración. O mandarlo afuera.
    const selectedTodo = todos.find( todo => todo.id === todoId )
    const index = todos.findIndex( item => item === selectedTodo )
    const newArray = [...todos]

    const onCompleted = () => {
        if (index !== -1){
            newArray[index].isCompleted = !newArray[index].isCompleted
            manageTodos('save', newArray)
        }
    }
    const onErased = () => {
        if (index !== -1){
            newArray.splice(index,1)
            manageTodos('save', newArray)
        }
    }
    const onEdit = (newDescription) => {
        if (index!== -1){
            newArray[index].description = newDescription
            manageTodos('save', newArray)
        }
    }
    
    return (
        <TodoItemUI onCompleted={onCompleted} onErased={onErased} onEdit={onEdit} todo={selectedTodo} />
          
    )
}

export { TodoItem }