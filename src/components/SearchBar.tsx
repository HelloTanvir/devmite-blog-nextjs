import { FormEvent, useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

interface Props {
    isMobile?: boolean;
}

const SearchBar = ({ isMobile }: Props) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(text);
    };

    return (
        <form
            className={`flex items-center gap-[10px] h-10 relative ${
                open ? `${isMobile ? 'w-[180px]' : 'w-[255px]'}` : 'w-10'
            } justify-end`}
            style={{
                transition: 'width 0.3s',
            }}
            onSubmit={handleSearch}
        >
            <div
                className={`h-full rounded-[50px] absolute right-0 ${
                    isMobile ? 'dark:bg-[#29282e]' : 'dark:bg-[#1c1b22]'
                } bg-black ${open ? 'w-full pl-[15px] pr-10 opacity-100' : 'w-0 opacity-0'}`}
                style={{
                    transition: 'width 0.2s ease-out',
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-full text-white placeholder-white bg-transparent outline-none"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`h-full rounded-full flex justify-center items-center w-10 hover:bg-[#8bc34a] bg-black text-white duration-200 ${
                    isMobile ? 'dark:bg-[#29282e]' : 'dark:bg-[#1c1b22]'
                } dark:hover:bg-[#8bc34a]`}
            >
                <RiSearch2Line className="scale-95" />
            </button>
        </form>
    );
};

export default SearchBar;
