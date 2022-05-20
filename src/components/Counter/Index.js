import React from "react";

const Counter = ({ uncompletedTodos }) => {
  return (
    <>
      {uncompletedTodos === 1 && <p>You have {uncompletedTodos} uncompleted ToDo</p>}
      {uncompletedTodos > 1 && <p>You have {uncompletedTodos} uncompleted ToDos</p>}
      {uncompletedTodos <= 0 && <p>You have completed all your ToDos! <br /> Let's add some Tasks!</p>}
    </>
  )
}

export { Counter }