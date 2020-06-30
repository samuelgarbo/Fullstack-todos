import React, { useContext, memo } from "react";
import { ListItemText, ListItem, Checkbox } from "@material-ui/core";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./context/TodosContext";
import axios from "axios";

function Todo(props) {
  const { completed, task, _id } = props.todo;
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  const handleRemoveTodo = () => {
       
    axios
      .delete(`/api/todos/${_id}`)
      .then((res) => dispatch({ type: "REMOVE", _id: res.data._id }));
  };
  const handleCheckTodo = () => {
    axios
      .put(`/api/todos/${_id}`, { completed: completed })
      .then((res) => dispatch({ type: "TOGGLE", _id: res.data._id }));
  };
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm _id={_id} task={task} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={handleCheckTodo}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
        </>
      )}
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={handleRemoveTodo}>
          <Delete />
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggle}>
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default memo(Todo);
