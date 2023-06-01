import { createSlice } from "@reduxjs/toolkit"
import { createUserAction, loginUserAction, logoutUserAction, verifyUserAction } from "../actions/user.actions"

const initialState = {
    isLoading: false,
    userDetails: {},
    error: null,
    isVerified: -1,
    users: {},
    isLogged: -1,
    isSigned: -1,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        clearUser: (state) => {
            state.userDetails = {}
        },
        clearSigned: (state) => {
            state.isSigned = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userDetails = action.payload;
                state.isSigned = true;
                console.log(state.isSigned);
            })
            .addCase(createUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })

            .addCase(loginUserAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userDetails = action.payload;
                state.isLogged = true
                console.log(state.userDetails);
                console.log(state.isLogged)
                console.log('done');
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                console.log(state.error);
            })

            .addCase(verifyUserAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(verifyUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isVerified = true;
                state.users = action.payload
            })
            .addCase(verifyUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.isVerified = false;
                state.error = action.payload
            })

            .addCase(logoutUserAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(logoutUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLogged = -1
            })
            .addCase(logoutUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const { clearError, clearUser, clearSigned } = userSlice.actions
export default userSlice.reducer