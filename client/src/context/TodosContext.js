import React, { createContext } from 'react';
import todoReducer from '../reducers/todoReducer';
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialTodos = []
export const TodosContext = createContext();
export const DispatchContext = createContext();

const loadTodos = async () => {
    try {
      let response = await axios.get('/api/todos')
      return response
    } catch (error) {
      console.log(error)
    }
  }

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos )
    useEffect(() => {
        loadTodos().then(response => {            
            dispatch({type:'LOAD_TODOS', payload: response.data})
        })
    }, []);
 

    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}
