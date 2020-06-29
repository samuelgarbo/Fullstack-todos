import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import setInputState from './hooks/useInputState';
import {DispatchContext} from './context/TodosContext';

function TodoForm() {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset]=setInputState('');
    const handleAddTodo = (evt) => {
        evt.preventDefault();
        dispatch({type:'ADD', task: value});
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