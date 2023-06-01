import { createAsyncThunk } from "@reduxjs/toolkit"
import { addTodos, deleteTodos, getTodos, updateTodos } from "../../constants/constants";

//action for adding new todo
const addTodoAction = createAsyncThunk(
    'todo/addTodo',
    async (formdata, { rejectWithValue }) => {
        try {
            const { data } = await addTodos(formdata)
            console.log(data);
            return data
        }
        catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//action for fetching all todo
const getTodoAction = createAsyncThunk(
    'todo/getTodo',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getTodos()
            console.log(data);
            return data
        }
        catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//action for updating status of todo
const updateTodoAction = createAsyncThunk(
    'todo/updateTodo',
    async (formdata, { rejectWithValue }) => {
        try {
            console.log('donee');
            const { data } = await updateTodos(formdata)
            console.log(data);
            return data
        }
        catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

//action for deleting todo
const deleteTodoAction = createAsyncThunk(
    'todo/deleteTodo',
    async (todo, { rejectWithValue }) => {
        try {
            const { data } = await deleteTodos(todo)
            console.log(data);
            return data
        }
        catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export { addTodoAction, getTodoAction, updateTodoAction, deleteTodoAction }