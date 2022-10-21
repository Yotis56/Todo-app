import React from "react";
import { useLocation } from "react-router";
import { AddTodo } from "../components/NewTodo/AddTodo";


const EditTodo = () => {
    const location = useLocation()

    return(
        <AddTodo 
            submitAction={location.state.handleEdit} 
            label='Edita tu ToDo' 
            todo={location.state.todo}
        />
    )
}

export { EditTodo }