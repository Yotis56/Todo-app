import React from "react";

const Counter = ({ uncompletedTodos, totalTodos }) => {
  return (
    <>
      {uncompletedTodos === 1 && <p>You have {uncompletedTodos} uncompleted toDo of {totalTodos} total ToDos</p>}
      {uncompletedTodos > 1 && <p>You have {uncompletedTodos} uncompleted toDos of {totalTodos} total ToDos</p>}
      {uncompletedTodos <= 0 && <p>You have completed all your ToDos! <br /> Let's add some Tasks!</p>}
    </>
  )
}

export { Counter }