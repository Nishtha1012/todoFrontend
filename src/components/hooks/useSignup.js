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
    const { isSigned } = useSelector(state => state.user)

    //adds the new user in database
    //shows alert of user signup succesfully
    const signUpUser = (data) => {
        const result = dispatch(createUserAction(data))
        console.log("issigned", isSigned);
        if (isSigned === -1) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'User already exist',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch(clearError())
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Registered',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(path.loginPage)
            dispatch(clearSigned())
        }
    }
    return { signUpUser }
}

export default useSignup
