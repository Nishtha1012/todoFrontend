import { createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin, userSignup, verifyUser } from "../../constants/constants"
import { userLogout } from "../../constants/constants";

//acton for new user signup
const createUserAction = createAsyncThunk(
    'users/createUser',
    async (formdata, { rejectWithValue }) => {
        try {
            const { data } = await userSignup(formdata)
            console.log("data", data);
            return data
        }
        catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


//action for user login
const loginUserAction = createAsyncThunk(
    'users/loginUser',
    async (formdata, { rejectWithValue }) => {
        try {
            const { data } = await userLogin(formdata)
            console.log(data);
            return data
        }
        catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

//action for verifying logged in user
const verifyUserAction = createAsyncThunk(
    'users/verifyUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await verifyUser()
            console.log(data);
            return data
        }
        catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

//action for user logout
const logoutUserAction = createAsyncThunk(
    'users/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await userLogout()
            console.log(data);
            return data
        }
        catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

export { createUserAction, loginUserAction, verifyUserAction, logoutUserAction }