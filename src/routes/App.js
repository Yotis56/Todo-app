import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { EditTodo } from "../pages/EditTodo";
import Home from "../pages/Home";
import { NewTodo } from "../pages/NewTodo";
import { useInitialState } from "../hooks/useInitialState";
import { AppContext } from "../context/AppContext";

const App = () => {
    
    const initialState = useInitialState()

    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/new" element={<NewTodo />}/>
                    <Route path="/edit/:id" element={<EditTodo />}/>
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    )
}

export { App }