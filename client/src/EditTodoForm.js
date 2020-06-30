import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/TodosContext';
import axios from 'axios';


function EditTodoForm(props) {
    const {_id, toggle, task} = props;
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    const handleEditTodo = (evt) => {
        evt.preventDefault()
        axios.put(`/api/todos/${_id}`, {task: value})
        .then(res => dispatch({type: 'EDIT', _id: res.data._id, newTask: res.data.task}))
        .then(()=>toggle())
        // reset();
        // toggle()
    }
    return (        
        <form onSubmit={handleEditTodo} style={{marginLeft: '1rem'}}>
            <TextField value={value} onChange={handleChange} margin='normal' autoFocus />        
        </form>
    );
}

export default EditTodoForm;