import { useState } from "react"
const useLocalStorage = () => {
    const [todos, setTodos] = useState([])

    const testTodos = [{
        id: 1,
        description: 'Lavar la loza',
        isCompleted: false
      }, {
        id: 2,
        description: 'Sacar al perro',
        isCompleted: false
      }]
    const searchTodos = () => {
        const persistentTodos = JSON.parse(localStorage.getItem('todos'))
            if (!persistentTodos){ 
                saveTodo(testTodos) 
            }
            setTodos(persistentTodos)
    }
    
    const saveTodo =  newItem  => {
        if (Array.isArray(newItem)){
            const parsedItem = JSON.stringify(newItem)
            localStorage.setItem('todos', parsedItem)
            setTodos(newItem)
        } else {
            const newTodo = {
                ...newItem,
                id: todos.length + 1
            }
            const newData = todos
            newData.push(newTodo)
            const parsedItem = JSON.stringify(newData)
            localStorage.setItem('todos', parsedItem)
            setTodos(newData)
        }
    }
    const onCompleted = (id) => {
        const index = todos.findIndex( todo => todo.id === id )
        const newArray = [...todos]
        if (index !== -1){
            newArray[index].isCompleted = !newArray[index].isCompleted
            saveTodo(newArray)
        }
    }
    const onDelete = (id) => {
        const index = todos.findIndex( todo => todo.id === id )
        const newArray = [...todos]
        if (index !== -1){
            newArray.splice(index,1)
            saveTodo(newArray)
        }
    }
    const onEdit = (id, newDescription) => {
        console.log(`Edit todo No. ${id}, new desription: ${newDescription}` )
        // const index = todos.findIndex( todo => todo.id === id )
        // const newArray = [...todos]
        // if (index!== -1){
        //     newArray[index].description = newDescription
        //     saveTodo('save', newArray)
        // }
    }
    const todoFunctions = {
        searchTodos,
        saveTodo,
        onCompleted, 
        onDelete, 
        onEdit
    } 
    return { todos, todoFunctions }
}

export { useLocalStorage }

//cuando se ejecuta una acción, se dispara un cambio
        //Ese cambio ejecuta una función onChange que recibe un evento. Esta función debe identificar qué cambió, 
        //Debería coger el estado actual de TODOS, modificarlo según sea el caso y enviarlo al hook
        //EL hook recibe el nuevo elemento y hace dos cosas, lo guardo en el localStorage y lo guardo en el estado global.        
        // const changeData = (action, newItem = undefined) => {
        //     if (action === 'search'){
        //         const todos = JSON.parse(localStorage.getItem('todos'))
        //         if (!todos){ 
        //             changeData('save', testTodos) 
        //         }  
        //         setData(todos)
        //     } else if (action === 'save' && newItem){
        //         if (Array.isArray(newItem)){
        //             const parsedItem = JSON.stringify(newItem)
        //             localStorage.setItem('todos', parsedItem)
        //             setData(newItem)
        //         } else {
        //             const newData = data
        //             newData.push(newItem)
        //             const parsedItem = JSON.stringify(newData)
        //             localStorage.setItem('todos', parsedItem)
        //             setData(newData)
        //         }
    
        //     }
        // }