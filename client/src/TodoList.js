import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { TodosContext } from './context/TodosContext';

function TodoList(props) {
    const todos  = useContext(TodosContext);
    console.log(todos)
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) =>
                        <div key={todo._id}>
                            <Todo todo={todo} />
                            {idx < todo.length - 1 && <Divider />}
                        </div>
                    )}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;