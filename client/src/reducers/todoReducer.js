import axios from 'axios'

const reducer = (state, action) => {
    switch (action.type) {     
        case 'LOAD_TODOS':
            return action.payload; 
        case 'ADD':            
            return [...state,  action.payload ]
        case 'REMOVE':
            return state.filter(todo => todo._id !== action._id)
        case 'TOGGLE':
            return state.map(todo => todo._id === action._id ? {...todo, completed: !todo.completed } : todo)
        case 'EDIT':
            return state.map(todo => todo._id === action._id ? {...todo, task: action.newTask} : todo)
        default:
            return state
    }
}
export default reducer;