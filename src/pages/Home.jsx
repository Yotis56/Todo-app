import React, { useEffect, useState } from "react";
import { Counter } from "../components/Counter/Index";
import { Header } from "../components/Header/Index";
import { Search } from "../components/Search/Index";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
//hooks
import { useLocalStorage } from '../hooks/UseLocalStorage'
//assets
import plusIcon from '../assets/plus-circle.svg'
import '../styles/App.css'
import { useNavigate } from "react-router";

function Home() {

const { todos, todoFunctions } = useLocalStorage()  
const [search, setSearch] = useState('')
const navigate = useNavigate()
// const [isOpenModal, setOpenModal] = useState(false)

useEffect( () => {
  todoFunctions.searchTodos()
}, [])

  const uncompletedTodos = todos? todos.filter((todo) => !todo.isCompleted).length : 0
  const totalTodos = todos?.length
  const searchedTodos = todos?.filter( todo => todo.description.toLowerCase().includes(search.toLowerCase())  )


  const list = () => {
    if (searchedTodos.length > 0 ) {
      return (
        <>
          {searchedTodos.map( (todo, index) =>          
            <TodoItem key={index} todo={todo} todoFunctions={todoFunctions}/> )
          }
        </>
      )
    } else if (totalTodos === 0) {
      return <p className="warning-text">No tienes Todos. Empieza añadiendo uno</p>
    } else {
      return <p> No se encontraron resultados para {search}</p>
    }
  }
 
  const handleAddTodo = () => {
    navigate('/new', { state: { addNewTodo: todoFunctions.saveTodo}})
  }

  return (
      <div className="app-container">
        <Header>
          <Counter uncompletedTodos={uncompletedTodos} totalTodos={totalTodos}/>
          <Search search={search} setSearch={setSearch} />
        </Header>
        <TodoList list={list}/>
        <img alt="icono para añadir todos" className="plus-icon" src={plusIcon} onClick={handleAddTodo}/>
  
        { /*isOpenModal &&
          <Modal setOpenModal={setOpenModal}>
            <NewTodo setOpenModal={setOpenModal} manageTodos={todoFunctions.saveTodo} noOfTodos={todos.length}/>
          </Modal> */
        }
      </div>
    
  )

}

export default Home;
