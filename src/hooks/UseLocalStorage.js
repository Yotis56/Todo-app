import { useState } from "react"

const useLocalStorage = () => {

    const [data, setData] = useState([])
    const testTodos = [{
        id: 1,
        description: 'Lavar la loza',
        isCompleted: false
      }, {
        id: 2,
        description: 'Sacar al perro',
        isCompleted: false
      }]
    const changeData = (action, newItem = undefined) => {
        if (action === 'search'){
            const todos = JSON.parse(localStorage.getItem('todos'))
            if (!todos){ 
                changeData('save', testTodos) 
            }  
            setData(todos)
        } else if (action === 'save' && newItem){
            if (Array.isArray(newItem)){
                const parsedItem = JSON.stringify(newItem)
                localStorage.setItem('todos', parsedItem)
                setData(newItem)
            } else {
                const newData = data
                newData.push(newItem)
                const parsedItem = JSON.stringify(newData)
                localStorage.setItem('todos', parsedItem)
                setData(newData)
            }

        }
    }        
    return [data, changeData]
}

export { useLocalStorage }

//cuando se ejecuta una acción, se dispara un cambio
        //Ese cambio ejecuta una función onChange que recibe un evento. Esta función debe identificar qué cambió, 
        //Debería coger el estado actual de TODOS, modificarlo según sea el caso y enviarlo al hook
        //EL hook recibe el nuevo elemento y hace dos cosas, lo guardo en el localStorage y lo guardo en el estado global.        
    