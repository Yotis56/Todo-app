import React from "react";
import { useLocation } from "react-router";
import { AddTodo } from "../components/NewTodo/AddTodo";

const NewTodo = () => {
    const location = useLocation()
    return(
        <AddTodo addNewTodo={location.state.addNewTodo}/>
    )
}

export { NewTodo }