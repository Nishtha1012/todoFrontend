import { Api } from "./api";

//base URL
const URL = 'https://todo-backend-fawn.vercel.app/';

//Api path for user
const userApi = {
    signup: `${URL}/signup`,
    login: `${URL}/login`,
    verify: `${URL}/verify`,
    logout: `${URL}/logout`
}

const todoApi = {
    get: `${URL}/todo/get`,
    add: `${URL}/todo/add`,
    update: `${URL}/todo/update`,
    delete: `${URL}/todo/delete`,
}

//routes for navigation
const routes = {
    signupPage: `/signup`,
    loginPage: `/login`,
    homePage: `/home`,
}

export const path = {
    root: '/',
    ...userApi,
    ...routes,
    ...todoApi
}

//post request to register user in database
export const userSignup = (data) => {
    return Api.post({
        url: path.signup,
        data: data
    })
}

//post request to login user 
export const userLogin = (data) => {
    return Api.post({
        url: path.login,
        data: data
    })
}

//get request to verify token
export const verifyUser = () => {
    return Api.get({
        url: path.verify
    })
}

//get request to remove the token
export const userLogout = () => {
    return Api.get({
        url: path.logout
    })
}

//get reqest for fetching the todos from database
export const getTodos = () => {
    return Api.get({
        url: path.get
    })
}

//to add new todo in todo database
export const addTodos = (data) => {
    return Api.post({
        url: path.add,
        data: data
    })
}

//to add new todo in todo database
export const updateTodos = (data) => {
    return Api.post({
        url: path.update,
        data: data
    })
}

//to add new todo in todo database
export const deleteTodos = (data) => {
    return Api.post({
        url: path.delete,
        data: data
    })
}
