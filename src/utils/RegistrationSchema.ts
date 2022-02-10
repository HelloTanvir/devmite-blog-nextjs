import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name should be at least 3 characters long')
        .required('Name is required'),

    address: yup
        .string()
        .min(3, 'Address should be at least 3 characters long')
        .required('Address is required'),

    email: yup.string().email().required('Email is required'),

    password: yup
        .string()
        .min(6, 'Password should be at least 6 characters long')
        .required('Password is required'),
});

export default RegistrationSchema;
