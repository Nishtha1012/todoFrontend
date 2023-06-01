import { object, string } from 'yup'

//yup object for validations of register form's fields
export const registerValidate = object({
    firstname: string().required().matches(/^[A-Za-z]+$/),
    lastname: string().required().matches(/^[A-Za-z]+$/),
    username: string().required(),
    email: string().required().email("Please enter a valid email"),
    password: string().required().min(8),
    dob: string().required("date of birth is a required field"),
    gender: string().required(),
})

//yup object for validations of login form's fields
export const loginValidate = object({
    email: string().required().email("Please enter a valid email"),
    password: string().required("password is a required field"),

})
