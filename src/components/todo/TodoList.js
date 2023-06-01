import React, { memo } from 'react'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button, NativeSelect } from '@mui/material';

import { deleteTodoAction, updateTodoAction } from '../store/actions/todoActions';
import { useDispatch } from 'react-redux';

const TodoList = ({ todo }) => {

  const dispatch = useDispatch()
  const deleteOneTodo = async () => {
    dispatch(deleteTodoAction({ id: todo._id }))
  }

  const updateStatus = async (event) => {
    console.log('done');
    let updatedStatus = event.target.value
    dispatch(updateTodoAction({ id: todo._id, updatedStatus: updatedStatus }))
  }

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {todo.todo}
      </TableCell>
      <TableCell align="right">{todo.description}</TableCell>
      <TableCell align="right">
        <NativeSelect
          defaultValue={todo.status}
          onChange={updateStatus} >
          <option value='pending'>Pending</option>
          <option value='completed'>Completed</option>
        </NativeSelect>
      </TableCell>
      {todo.status === 'completed' ? <TableCell align="right"><Button variant="outlined" color="error" onClick={deleteOneTodo}>
        Delete
      </Button></TableCell> : null}
    </TableRow>
  )
}

export default memo(TodoList)

