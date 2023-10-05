import React, { useContext, useEffect, useState } from "react";
import { Counter } from "../components/Counter/Index";
import { Header } from "../components/Header/Index";
import { Search } from "../components/Search/Index";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { Modal } from "../components/Modal/Modal";
import { NewTodo } from "../components/NewTodo/NewTodo";
import { AppContext } from "../context/AppContext";

//assets
import PlusIcon from '../assets/plus-circle.svg'
import '../styles/App.css'

function Home() {


const { todos, todoFunctions } = useContext(AppContext) 
const [search, setSearch] = useState('')
const [isOpenModal, setOpenModal] = useState(false)

useEffect( () => {
  todoFunctions.searchTodos()
}, [])

  const uncompletedTodos = todos ? todos.filter((todo) => !todo.isCompleted).length : 0
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

        {/* <img alt="icono para añadir todos" className="plus-icon" src={plusIcon} onClick={handleOpenModal}/> */}

        <span className='Icon-container'>
          <PlusIcon alt="icono para añadir todos" className="Icon-svg plus-icon" onClick={handleOpenModal}/>
        </span> 
        { isOpenModal &&
          <Modal setOpenModal={setOpenModal}>
            <NewTodo setOpenModal={setOpenModal} manageTodos={todoFunctions.saveTodo} noOfTodos={todos.length}/>
          </Modal>
        }
      </div>
    
  )

}

export default Home;
