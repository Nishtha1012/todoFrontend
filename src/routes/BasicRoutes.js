import { Navigate, Route, Routes } from "react-router-dom";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import { path } from "../components/constants/constants";
import { HomePage } from "../components/pages/HomePage";
import ProtectedRoute from "./protectedRoute";


export const BasicRoutes = () => {
    return (
        <Routes>
            <Route path={path.loginPage} element={<LogIn />} />
            <Route path={path.signupPage} element={<SignUp />} />
            <Route path={path.homePage} element={
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            } ></Route>
            <Route path="/" element={<Navigate replace to={path.homePage} />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    )
}
