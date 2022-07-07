import React, { useEffect, useState } from "react";
import { Counter } from "./components/Counter/Index";
import { Header } from "./components/Header/Index";
import { Search } from "./components/Search/Index";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { Modal } from "./components/Modal/Modal";
import { NewTodo } from "./components/NewTodo/NewTodo";
//hooks
import { useLocalStorage } from './hooks/UseLocalStorage'
//assets
import plusIcon from './assets/plus-circle.svg'
import './styles/App.css'

function App() {

const [todos, manageTodos] = useLocalStorage()  
const [search, setSearch] = useState('')
const [isOpenModal, setOpenModal] = useState(true)

useEffect( () => {
  manageTodos('search')
}, [])

  const uncompletedTodos = todos? todos.filter((todo) => !todo.isCompleted).length : 0
  const totalTodos = todos.length
  const searchedTodos = todos.filter( todo => todo.description.toLowerCase().includes(search.toLowerCase())  )


  const list = () => {
    if (searchedTodos.length > 0 ) {
      return (
        <>
          {searchedTodos.map( todo =>          
            <TodoItem key={todo.id} todoId={todo.id} todos={todos} manageTodos={manageTodos} /> )
          }
        </>
      )
    } else if (totalTodos === 0) {
      return <p className="warning-text">No tienes Todos. Empieza añadiendo uno</p>
    } else {
      return <p> No se encontraron resultados para {search}</p>
    }
  }
 
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
      <div className="app-container">
        <Header>
          <Counter uncompletedTodos={uncompletedTodos} totalTodos={totalTodos}/>
          <Search search={search} setSearch={setSearch} />
        </Header>
        <TodoList list={list}/>
        <img alt="icono para añadir todos" className="plus-icon" src={plusIcon} onClick={handleOpenModal}/>
  
        { isOpenModal &&
          <Modal setOpenModal={setOpenModal}>
            <NewTodo setOpenModal={setOpenModal} manageTodos={manageTodos} noOfTodos={todos.length}/>
          </Modal>
        }
      </div>
    
  )

}

export default App;
