import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),

    password: yup
        .string()
        .min(6, 'Password should be atleast 6 characters long')
        .required('Password is required'),
});

export default LoginSchema;
