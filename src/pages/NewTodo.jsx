import React from "react";
import { AddTodo } from "../components/NewTodo/AddTodo";

const NewTodo = (props) => {
    return(
        <AddTodo manageTodos={props.AddTodo}/>
    )
}

export { NewTodo }