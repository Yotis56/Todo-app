import { useLocalStorage } from "./UseLocalStorage";

function useTodos () {
    
    const [todos, manageTodos] = useLocalStorage()
    
    const onCompleted = (id) => {
        const index = todos.findIndex( todo => todo.id === id )
        console.log(todos)

        const newArray = [...todos]
        if (index !== -1){
            newArray[index].isCompleted = !newArray[index].isCompleted
            manageTodos('save', newArray)
        }
    }
    const onDelete = (id) => {
        const index = todos.findIndex( todo => todo.id === id )
        const newArray = [...todos]
        if (index !== -1){
            newArray.splice(index,1)
            manageTodos('save', newArray)
        }
    }
    const onEdit = (id, newDescription) => {
        console.log(`Edit todo No. ${id}, new desription: ${newDescription}` )
        // const index = todos.findIndex( todo => todo.id === id )
        // const newArray = [...todos]
        // if (index!== -1){
        //     newArray[index].description = newDescription
        //     manageTodos('save', newArray)
        // }
    }
    const state = { todos }
    const todoFunctions = {
        onCompleted, 
        onDelete, 
        onEdit
    }
    return {state, todoFunctions}
}

export { useTodos }