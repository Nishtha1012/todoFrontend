import { useEffect } from 'react'

//third party imports
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import { useDispatch, useSelector } from "react-redux"

//constants
import { path } from "../constants/constants"

//
import { loginUserAction, logoutUserAction } from "../store/actions/user.actions"
import { clearError } from "../store/slice/userSlice"
import { Alert } from "@mui/material"

const useLogin = () => {
    const dispatch = useDispatch()
    const { isLogged,error } = useSelector(state => state.user)
    const { userDetails } = useSelector(state => state.user)

    const navigate = useNavigate()
 useEffect(() => {
    if (isLogged === true) {
      navigate(path.homePage)
      console.log(isLogged)
    }
  }, [isLogged])

  useEffect(() => {
    if (error) {
      navigate(path.loginPage)
    }
  }, [error])
    //checks in database and logs the authorized user in
    //shows appropriate alerts for logged in user or wrong credentials
    console.log("islogged", isLogged);
    const loginUser = async (data) => {
        const result = dispatch(loginUserAction(data))
    }


    //clears the cookie and logouts the user
    const userLogOut = () => {
        dispatch(logoutUserAction())
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'User Logged Out',
            showConfirmButton: false,
            timer: 1500
        })
        navigate(path.loginPage)
    }
    return { loginUser, userLogOut, isLogged }
}

export default useLogin
