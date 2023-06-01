//third party imports
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//material ui imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

//custom components
import useSignup from '../hooks/useSignup';
import { registerValidate } from '../../validation/validate';

//constants
import { path } from '../constants/constants';

//css
import style from './auth.module.css'

//this component displays signup form and appropriate alert after signup
export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerValidate) })
    const { signUpUser } = useSignup()

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '70ch' },
            }}
            className={style.mauto}
        >
            <h3>Signup</h3>
            <form onSubmit={handleSubmit(signUpUser)}>
                <div>
                    <TextField
                        id="outlined-firstname-input"
                        label="First Name"
                        type="text"
                        {...register('firstname')} />
                    <p className={style.error}> {errors.firstname?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-lastname-input"
                        label="Last Name"
                        type="text"
                        {...register('lastname')} />
                    <p className={style.error}> {errors.lastname?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-username-input"
                        label="Username"
                        type="text"
                        {...register('username')} />
                    <p className={style.error}> {errors.username?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="text"
                        {...register('email')} />
                    <p className={style.error}> {errors.email?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        {...register('password')} />
                    <p className={style.error}> {errors.password?.message} </p>
                </div>
                <div>
                    <TextField
                        id="outlined-dob-input"
                        label="Date of birth"
                        type="date"
                        {...register('dob')} />
                    <p className={style.error}> {errors.dob?.message} </p>

                </div>
                <div>
                    <RadioGroup name="use-radio-group" defaultValue="Female"  >
                        <FormControlLabel value="Female" label="Female" control={<Radio />} {...register('gender')} />
                        <FormControlLabel value="Male" label="Male" control={<Radio />} {...register('gender')} />
                    </RadioGroup>
                    <p className={style.error}> {errors.gender?.message} </p>
                </div>
                <div>
                    <Button variant="contained" type='submit' >Signup</Button>
                </div>
            </form>
            <p><Link to={path.loginPage} className={style.link}>Already an user ? Login</Link> </p>
        </Box >
    );
}
