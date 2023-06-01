//third party imports
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//material ui imports
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//custom components
import AddTodo from '../todo/AddTodo';
import useLogin from '../hooks/useLogin';
import { getTodoAction } from '../store/actions/todoActions';
import TodoList from '../todo/TodoList';

//css
import style from './home.module.css'

export const HomePage = () => {
    const { users } = useSelector(state => state.user)
    const { allTodos } = useSelector(state => state.todo)
    const [todos, settodos] = useState([]);
    const { userLogOut } = useLogin()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodoAction())
    }, [dispatch])

    useEffect(() => {
        settodos(allTodos)
    }, [allTodos])

    //this component integrates all components and shows final homepage
    return (
        <>
            <div className={style.homewrapper}>
                <div><h3>Welcome {users?.data.firstname}</h3></div>
                <div className={style.logout}>
                    <Button variant="outlined" color="error" onClick={userLogOut}>
                        LOGOUT
                    </Button>
                </div>
            </div>

            <div className={style.addNew}>
                <AddTodo />
            </div >

            <TableContainer component={Paper}>
                {todos.length > 0 ?
                    <>
                        <Table sx={{ maxWidth: 900 }} aria-label="simple table" className={style.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Task</TableCell>
                                    <TableCell align="right" >Description</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {todos.map((todo) => <TodoList todo={todo} key={todo._id} />)}
                            </TableBody>
                        </Table>
                    </> : <h3>Add your First TODO</h3>}
            </TableContainer >
        </>
    )
}
