import React, { useState } from "react";
import { Counter } from "./components/Counter/Index";
import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";



function App() {

  const testTodos = [{
    id: 1,
    description: 'Lavar la loza',
    isCompleted: false
  }, {
    id: 2,
    description: 'Sacar al perro',
    isCompleted: true
  }]
  const [todos, setTodos] = useState(testTodos)
  const uncompletedTodos = todos.filter((todo) => !todo.completed).length
  //const uncompletedTodos = 1

  return (
    <>
      <Header>
        <Counter uncompletedTodos={uncompletedTodos} />
        <Search />
      </Header>
    </>
  )

}

export default App;
