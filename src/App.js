import React, { useState, useEffect } from "react";
import { Counter } from "./components/Counter/Index";
import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { TodoList } from "./components/TodoList";
//hooks
import { useLocalStorage } from './hooks/UseLocalStorage'

const saveTodos = (todos) => {
 //cómo usar el hook de useLocalStorage?
}

function App() {

  const data = useLocalStorage('search')

  useEffect( () => {
    if (data === null){
     
    }
  }, [])

  
  const testTodos = [{
    id: 1,
    description: 'Lavar la loza',
    isCompleted: false
  }, {
    id: 2,
    description: 'Sacar al perro',
    isCompleted: true
  }]

  window.localStorage.setItem('todos', JSON.stringify(testTodos))
  const [todos, setTodos] = useState(testTodos)
  const uncompletedTodos = todos.filter((todo) => !todo.completed).length
  //const uncompletedTodos = 1

  return (
    <>
      <Header>
        <Counter uncompletedTodos={uncompletedTodos} />
        <Search />
      </Header>
      <TodoList todos={testTodos} />
    </>
  )

}

export default App;
