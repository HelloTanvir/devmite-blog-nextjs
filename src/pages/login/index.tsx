// import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import TextField from '../../components/TextField';
import LoginFields from '../../utils/LoginFields';
import LoginSchema from '../../utils/LoginSchema';

const Login: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const submitForm = async (data: { [key: string]: any }) => {
        console.log({ loginData: data });
    };

    return (
        <div>
            <Head>
                <title>Devmite.com | Login</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

            <main
                className="flex items-center justify-center h-screen"
                style={{
                    backgroundImage: 'url("/background.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col items-center px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md">
                    {/* form header */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <h1 className="text-2xl font-medium tracking-wide text-gray-800">
                            Login to your account
                        </h1>
                        <p className="text-sm font-medium text-gray-500">
                            Don&#39;t have a profile yet?{' '}
                            <span className="text-blue-600 transition-colors hover:text-blue-500">
                                <Link href="/register">Register</Link>
                            </span>
                        </p>
                    </div>

                    {/* form body */}
                    <form
                        className="flex flex-col items-end gap-5"
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <div className="flex flex-col">
                            {LoginFields.map((field) => (
                                <TextField
                                    key={field.name}
                                    label={field.label}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    className="mt-4 md:w-96"
                                    error={errors[field.name]?.message}
                                    register={register}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 text-base font-semibold text-gray-100 bg-green-700 rounded-md hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
