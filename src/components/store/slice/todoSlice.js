import { createSlice } from "@reduxjs/toolkit"
import { addTodoAction, deleteTodoAction, getTodoAction, updateTodoAction } from "../actions/todoActions"

const initialState = {
    isLoading: false,
    allTodos: [],
    error: null,
    added: false,
    updated: false
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodoAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getTodoAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allTodos = action.payload
                // state.allTodos = [...state.allTodos, action.payload]
            })
            .addCase(getTodoAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

            .addCase(addTodoAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addTodoAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allTodos = action.payload
                state.added = true
            })
            .addCase(addTodoAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

            .addCase(updateTodoAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(updateTodoAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allTodos = action.payload
                // console.log(state.allTodos);
                state.updated = true
            })
            .addCase(updateTodoAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

            .addCase(deleteTodoAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteTodoAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allTodos = action.payload
                state.updated = true
            })
            .addCase(deleteTodoAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export default todoSlice.reducer