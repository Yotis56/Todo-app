import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { EditTodo } from "../pages/EditTodo";
import Home from "../pages/Home";
import { NewTodo } from "../pages/NewTodo";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/new" element={<NewTodo />}/>
                <Route path="/edit/:id" element={<EditTodo />}/>
            </Routes>
        </HashRouter>
    )
}

export { App }