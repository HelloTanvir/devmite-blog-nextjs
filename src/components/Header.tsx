import Link from 'next/link';
import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiUser6Fill } from 'react-icons/ri';
import Logo from './Logo';
import NavMobile from './NavMobile';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

const headerDetails = { logoName: 'Devmite.com' };

const headerNavLinks = [
    { href: '/home', title: 'home' },
    { href: '/categories', title: 'categories' },
    { href: '/business', title: 'business' },
    { href: '/health', title: 'health' },
    { href: '/design', title: 'design' },
    { href: '/sport', title: 'sport' },
    { href: '/archive', title: 'archive' },
    { href: '/contact', title: 'contact' },
];

function Header() {
    return (
        <>
            <div className="container flex justify-between lg:block">
                <header className="flex flex-col gap-5 lg:flex-row lg:items-center py-[30px]">
                    {/* left */}
                    <div className="flex-1">
                        {/* logo */}
                        <Link href="/" aria-label="Devmite.com">
                            <div className="flex  items-center cursor-pointer">
                                <Logo />

                                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-200 hover:text-[#649130] duration-200">
                                    {headerDetails.logoName}
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* social-links */}
                    {/* search bar */}
                    <SearchBar />

                    <div className="items-center hidden gap-8 lg:flex">
                        <RiFacebookFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                        <RiTwitterFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                        <RiInstagramFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                    </div>

                    {/* ulits wrapper */}
                    <div className="flex items-center">
                        {/* theme switch */}
                        <ThemeSwitch />
                    </div>

                    <Link href="/profile">
                        <RiUser6Fill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                    </Link>
                </header>

                {/* menu/tab small device */}
                <NavMobile headerNavLinks={headerNavLinks} />
            </div>

            {/* menu/tab large device */}
            <div className="sticky top-0 z-40 hidden dark:bg-[#121212] bg-white dark:border-[#42404d] border-b shadow-sm lg:block">
                <nav className="container flex items-center justify-between">
                    {/* tabs */}
                    <div className="flex gap-10 text-[.85rem]  py-4">
                        {headerNavLinks.map((link) => (
                            <Link key={link.title} href={link.href}>
                                <span className="uppercase cursor-pointer">{link.title}</span>
                            </Link>
                        ))}
                    </div>

                    {/* auth buttons */}
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-lg cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                                login
                            </span>
                        </Link>

                        <Link href="/register">
                            <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-lg cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                                register
                            </span>
                        </Link>

                        {/* profile button will be visible if user is logged in */}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
