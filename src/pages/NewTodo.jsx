import React from "react";
import { useLocation } from "react-router";
import { AddTodo } from "../components/NewTodo/AddTodo";

const NewTodo = () => {
    const location = useLocation()
    return(
        <AddTodo submitAction={location.state.addNewTodo} label='Añade un nuevo ToDo'/>
    )
}

export { NewTodo }