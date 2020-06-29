import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todoReducer';
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialTodos = []
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos, ()=>{
        let val;
        axios.get('/api/todos')
        .then(response => val = response.data)
        .catch(e => val= initialTodos)
        return val
    });   
  

    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}
