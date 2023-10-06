import { useState } from "react";

const testTodos = [{
    id: 1,
    description: 'Lavar la loza',
    isCompleted: false
  }, {
    id: 2,
    description: 'Sacar al perro',
    isCompleted: false
  }]

const useInitialState = () => {
    const [todos, setState] = useState(testTodos)

    const searchTodos = () => {
        const persistentTodos = JSON.parse(localStorage.getItem('todos'))
        if (!persistentTodos) {
            saveTodo({newItem: testTodos})
        } else {
            setState(persistentTodos)
        }
    }

    const saveTodo = payload => {
        if (Array.isArray(payload.newItem)){
            const parsedItem = JSON.stringify(payload.newItem)
            localStorage.setItem('todos', parsedItem)
            setState(payload.newItem)
        } else {
            const newData = [...todos]
            newData.push(payload.newItem)
            const parsedItem = JSON.stringify(newData)
            localStorage.setItem('todos', parsedItem)
            setState(newData)
        }
    }

    const onCompleted = payload => {
        const index = todos.findIndex(todo => todo.id === payload.id)
        const newData = [...todos]
        if (index !== -1){
            newData[index].isCompleted = !newData[index].isCompleted
            saveTodo({newItem: newData})
        }
    }

    const onDelete = payload => {
        const index = todos.findIndex( todo => todo.id === payload.id )
        const newArray = [...todos]
        if (index !== -1){
            newArray.splice(index,1)
            saveTodo({newItem: newArray})
        }
    }
    
    const onEdit = payload => {
        const index = todos.findIndex( todo => todo.id === payload.id )
        const newArray = [...todos]
        if (index!== -1){
            newArray[index].description = payload.newDescription
            saveTodo({newItem: newArray})
        }
    }

    const todoFunctions = {
        searchTodos,
        saveTodo,
        onCompleted, 
        onDelete, 
        onEdit
    } 
    return {todos, todoFunctions}
}

export { useInitialState }