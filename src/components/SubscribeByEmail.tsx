import React, { FormEvent, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const SubscribeByEmail = () => {
    const [text, setText] = useState('');

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(text);
    };

    return (
        <form
            className="flex items-center w-full md:flex-1 gap-[10px] h-[50px]"
            onSubmit={handleSubscribe}
        >
            <input
                type="text"
                placeholder="Enter your email"
                className="border-b border-[#ccc] dark:border-[#696464] dark:text-white dark:bg-[#1c1b22] dark:placeholder-white flex-1 h-full px-5 text-[#495057] rounded-[30px] min-w-[280px] outline-none placeholder-[#495057]"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                type="submit"
                className="h-full rounded-[30px] px-5 hover:bg-[#8bc34a] bg-black dark:bg-[#1c1b22] dark:hover:bg-[#8bc34a] text-white duration-200"
            >
                <FaPaperPlane />
            </button>
        </form>
    );
};

export default SubscribeByEmail;
