import React from "react";
import { TodoItemUI } from "../TodoitemUI/TodoItemUI";

const TodoItem = ( {todo} ) => {

    const onCompleted= (event) => {
        console.log(event.target)
        console.log('Se quiere completar una tarea')
        //Acá debería cambiar el estado de una tarea de completed, a uncompleted. Y viceversa.
        //Maybe... Usar un hook
    }
    const onErased = (event) => {
        console.log(event.target)
        console.log('Se quiere borrar una tarea')
        //Acá debería borrar una tarea del array. con un split funcionaría la cosa.
    }

    return (
        <TodoItemUI onCompleted={onCompleted} onErased={onErased} todo={todo} />
          
    )
}

export { TodoItem }