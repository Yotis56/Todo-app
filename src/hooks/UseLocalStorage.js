const useLocalStorage = ( action, todos = undefined) => {
    switch (action) {
        case 'search':
            const data = localStorage.getItem('todos')
            return data === null ? data : JSON.parse(data)
        case 'save':
            return todos !== undefined ? 
                'Please send an array of todos':
                window.localStorage.setItem('todos', todos)
        default:
            return 'No action defined. Please define an action'
    }
}

export { useLocalStorage }