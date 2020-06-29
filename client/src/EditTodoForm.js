import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/TodosContext';


function EditTodoForm(props) {
    const {id, toggle, task} = props;
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    const handleEditTodo = (evt) => {
        evt.preventDefault()
        dispatch({type: 'EDIT', id: id, newTask: value});
        reset();
        toggle()
    }
    return (        
        <form onSubmit={handleEditTodo} style={{marginLeft: '1rem'}}>
            <TextField value={value} onChange={handleChange} margin='normal' autoFocus />        
        </form>
    );
}

export default EditTodoForm;