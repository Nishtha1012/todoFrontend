import { useEffect } from 'react'
//third party imports
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { path } from "../constants/constants"

import { createUserAction } from "../store/actions/user.actions"
import { clearError, clearSigned, clearUser } from "../store/slice/userSlice"


const useSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isSigned, error } = useSelector((state) => state.user)

  useEffect(() => {
    if (isSigned === true) {
      navigate(path.loginPage)
      alert('user registered')
      dispatch(clearSigned())
    }
  }, [isSigned])

  useEffect(() => {
    if (error) {
      navigate(path.signupPage)
      alert('user already existss')
      dispatch(clearError())
    }
  }, [error])


    //adds the new user in database
    //shows alert of user signup succesfully
    const signUpUser = (data) => {
        const result = dispatch(createUserAction(data))
        console.log("issigned", isSigned);
    }
    return { signUpUser }
}

export default useSignup
