import React from "react";
import './Counter.css'

const Counter = ({ uncompletedTodos, totalTodos }) => {
  return (
    <>
      {uncompletedTodos === 1 && <p className="counter-text">You have {uncompletedTodos} uncompleted toDo of {totalTodos} total ToDos</p>}
      {uncompletedTodos > 1 && <p className="counter-text">You have {uncompletedTodos} uncompleted toDos of {totalTodos} total ToDos</p>}
      {uncompletedTodos <= 0 && <p className="counter-text">You have completed all your ToDos! <br /> Let's add some Tasks!</p>}
    </>
  )
}

export { Counter }