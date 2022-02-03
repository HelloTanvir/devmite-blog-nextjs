import { FormEvent, useState } from 'react';
import { ImSearch } from 'react-icons/im';

const SearchBox = () => {
    const [text, setText] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(text);
    };

    return (
        <form className="flex items-center gap-[10px] h-[50px]" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search..."
                className="border-b border-[#ccc] dark:border-[#696464] h-full px-5 text-[#495057] rounded-[30px] outline-none placeholder-[#495057] dark:text-white dark:bg-[#1c1b22] dark:placeholder-white"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                type="submit"
                className="h-full rounded-[30px] px-5 hover:bg-[#8bc34a] bg-black text-white duration-200 dark:bg-[#1c1b22] dark:hover:bg-[#8bc34a]"
            >
                <ImSearch />
            </button>
        </form>
    );
};

export default SearchBox;
