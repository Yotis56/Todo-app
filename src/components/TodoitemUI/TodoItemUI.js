import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import './todoItemUI.css'


const TodoItemUI = ({todo, onCompleted, onDelete, onEdit}) => {
   
    return (
        <>
            <li className="todoItem__container">
                <CompleteIcon 
                    completed={todo.isCompleted} 
                    onComplete={() => onCompleted(todo.id)}/>
                <p className={  `${todo.isCompleted? 'todoItem--completed' : ''}`  }> {todo.description} </p>
                <div className="todoItem__icons">
                <EditIcon onEdit={() => onEdit(todo.id, 'someDescription')}/>
                <DeleteIcon onDelete={() => onDelete(todo.id)}/>
                </div>
            </li>
        </>
    )
}

export { TodoItemUI }


