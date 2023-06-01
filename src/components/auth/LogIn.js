//third party imports
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'

//material ui imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//custom components
import useLogin from '../hooks/useLogin';
import { loginValidate } from '../../validation/validate';

//constants
import { path } from '../constants/constants';

//css
import style from './auth.module.css'
import { useEffect } from 'react';

//this component displays login form and appropriate alerts after login or wrong credentials
export default function LogIn() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginValidate) })
    const { loginUser, isLogged } = useLogin()


    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70ch' },
            }}
            className={style.mauto}
        >
            <h3>Login</h3>
            <form onSubmit={handleSubmit(loginUser)}>
                <div>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="text"
                        {...register('email')}
                    />
                    <p className={style.error}> {errors.email?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        {...register('password')}
                    />
                    <p className={style.error}> {errors.password?.message} </p>
                </div>
                <div>
                    <Button variant="contained" type='submit'>Login</Button>
                </div>
            </form>
            <p><Link to={path.signupPage} className={style.link}>New User ? Signup</Link> </p>
        </Box >
    );
}
