import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { path } from "../components/constants/constants"
import { verifyUserAction } from "../components/store/actions/user.actions"

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()

    const { isVerified } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(verifyUserAction())
    }, [dispatch, isVerified])

    const navigate = useNavigate()

    if (isVerified === true) {
        return children
    }
    if (isVerified === false) {
        navigate(path.loginPage)
    }
}

export default ProtectedRoute
