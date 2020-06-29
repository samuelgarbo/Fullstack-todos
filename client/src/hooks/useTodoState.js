import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';


export default initialTodos => {

    const [todos, setTodos] = useLocalStorageState('todos',initialTodos);

    return {
        todos,
        addTodo: (task) => {
            let newTodo = { id: uuid(), task: task, complete: false }
            setTodos([...todos, newTodo])
        },
        removeTodo: (id) => {
            setTodos(todos.filter(todo => {
                return todo.id !== id
            }))
        },
        editTodo: (todoId, todoTask) => {
            let newTodos = todos.map(todo=>{
                if(todo.id===todoId){
                    todo.task= todoTask;
                }
                return todo;
            })
            setTodos(newTodos)
        },
        checkTodo: (id) => {
            let newTodos = todos.map(todo=>{
                if(todo.id===id){
                    todo.completed= !todo.completed;
                }
                return todo;
            })
            setTodos(newTodos)
        }

    }
}
