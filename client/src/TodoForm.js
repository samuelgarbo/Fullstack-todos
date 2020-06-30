import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import setInputState from './hooks/useInputState';
import {DispatchContext} from './context/TodosContext';
import axios from 'axios';

function TodoForm() {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset]=setInputState('');
    const handleAddTodo = (evt) => {
        evt.preventDefault();
        axios.post('/api/todos', { task: value })
        .then( res => dispatch({type:'ADD', payload: res.data}))
        .catch(e=>console.log(e))
        reset();
    }
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={handleAddTodo} >
                <TextField required value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
            </form>           
        </Paper>
    );
}

export default TodoForm;