// import Link from "next/link";
import { SearchCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const headerNavLinks = [
    { href: '/blog', title: 'Search' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
];

const SearchBox = () => {
    const [searchShow, setSearcShow] = useState(false);

    const onToggleSearchInput = () => {
        setSearcShow((status) => {
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };

    return (
        <div className="">
            <button
                type="button"
                className="w-8 h-8 ml-1 mr-4 rounded"
                aria-label="Toggle Menu"
                onClick={onToggleSearchInput}
            >
                <div className="">
                    {searchShow ? (
                        <SearchCircleIcon className="h-6.5 text-gray-900 dark:text-gray-100" />
                    ) : (
                        <SearchCircleIcon className="h-6.5 text-gray-900 dark:text-gray-100" />
                    )}
                </div>
            </button>
            <div
                // className={`fixed w-full h-0 top-12 right-6 bg-gray-200 dark:bg-gray-800 opacity-60 z-20 transform ease-in-out duration-300 ${
                //   searchShow ? "-translate-x-0" : "-translate-x-full"
                // }`}
                className={`absolute w-full h-0 top-12 right-0 bg-gray-100 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
                    searchShow ? 'translate-x-0' : '-translate-x-full'
                }`}
                // className={`fixed w-full h-0 top-12 right-0 bg-gray-200 dark:bg-gray-800 opacity-60 z-20 transform ease-in-out duration-300 ${
                //   searchShow ? "-translate-y-36" : "-translate-y-full"
                // }`}
            >
                <button
                    type="button"
                    aria-label="toggle modal"
                    className="fixed w-full h-full cursor-auto focus:outline-none"
                    onClick={onToggleSearchInput}
                />
                <searchbox className="fixed h-full mt-8">
                    <input
                        type="text"
                        className="block w-screen py-1.5 pl-4 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 ring-opacity-90 bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-gray-900 aa-input"
                        placeholder="Search Devmite"
                    />
                </searchbox>
            </div>
        </div>
    );
};

export default SearchBox;
