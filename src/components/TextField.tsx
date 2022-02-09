import React, { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface Props {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    error?: string;
    className?: string;
    register: UseFormRegister<FieldValues>;
}

const TextField = ({ label, type, name, placeholder, error, className, register }: Props) => {
    const [passInpuType, setPassInpuType] = useState<'password' | 'text'>('password');

    const togglePassInputType = () => {
        if (passInpuType === 'password') {
            setPassInpuType('text');
        } else {
            setPassInpuType('password');
        }
    };

    return (
        <div className={className}>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={name}>
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                    className={`bg-white text-gray-700 focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-outline ${
                        error ? 'border-red-500' : 'border-gray-300 '
                    }`}
                    id={name}
                    // cols={30}
                    rows={4}
                    placeholder={placeholder}
                    {...register(name)}
                />
            ) : (
                <>
                    {type === 'password' ? (
                        <div className="relative">
                            <input
                                className={`bg-white text-gray-700 focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-outline ${
                                    error ? 'border-red-500' : 'border-gray-300'
                                }`}
                                type={passInpuType}
                                id={name}
                                placeholder={placeholder}
                                {...register(name)}
                            />

                            {passInpuType === 'password' ? (
                                <FiEye
                                    className="absolute transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                    onClick={togglePassInputType}
                                />
                            ) : (
                                <FiEyeOff
                                    className="absolute transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                    onClick={togglePassInputType}
                                />
                            )}
                        </div>
                    ) : (
                        <input
                            className={`bg-white text-gray-700 focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:shadow-outline ${
                                error ? 'border-red-500' : 'border-gray-300'
                            }`}
                            type={type}
                            id={name}
                            placeholder={placeholder}
                            {...register(name)}
                        />
                    )}
                </>
            )}

            {error ? <p className="mt-1 ml-1 text-xs italic text-red-500">{error}</p> : ''}
        </div>
    );
};

export default TextField;
