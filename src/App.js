import React, { useState, useEffect } from "react";
import { Counter } from "./components/Counter/Index";
import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { TodoList } from "./components/TodoList";
//hooks
import { useLocalStorage } from './hooks/UseLocalStorage'


 //cómo usar el hook de useLocalStorage?
 //puedo dentro del hook, usar a UseState. Creo un estado de todos y la función que modifica eso, y ese es mi return
 //O sea, retorno el valor actual del estado (La lista de Todos) Y una función que cambie ese estado (no la función normal del estado, una que yo creo)


function App() {

  const [todos, manageTodos] = useLocalStorage()
  
  

  useEffect( () => {
    manageTodos('search')
  }, [])

  const uncompletedTodos = todos? todos.filter((todo) => !todo.completed).length : 0

  return (
    <>
      <Header>
        <Counter uncompletedTodos={uncompletedTodos} />
        <Search />
      </Header>
      <TodoList todos={todos} />
    </>
  )

}

export default App;
