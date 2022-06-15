import React, { useEffect, useState } from "react";
import { Counter } from "./components/Counter/Index";
import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
//hooks
import { useLocalStorage } from './hooks/UseLocalStorage'

function App() {

const [todos, manageTodos] = useLocalStorage()  
const [search, setSearch] = useState('')


useEffect( () => {
  manageTodos('search')
}, [])

  const uncompletedTodos = todos? todos.filter((todo) => !todo.isCompleted).length : 0
  const totalTodos = todos.length
  const searchedTodos = todos.filter( todo => todo.description.toLowerCase().includes(search.toLowerCase())  )

  const list = (
    <>
      { searchedTodos.map( todo =>          
                <TodoItem key={todo.id} todo={todo} todos={todos} manageTodos={manageTodos} />    
            )}
    </>
  )

  return (
    <>
      <Header>
        <Counter uncompletedTodos={uncompletedTodos} totalTodos={totalTodos}/>
        <Search search={search} setSearch={setSearch} />
      </Header>
      <TodoList list={list}/>
    </>
  )

}

export default App;
