import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialFacebook } from 'react-icons/ti';
import Logo from './Logo';
import NavMobile from './NavMobile';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

const headerDetails = { logoName: 'Devmite.com' };

const headerNavLinks = [
    { href: '/home', title: 'home' },
    { href: '/categories', title: 'categories' },
    { href: '/politics', title: 'politics' },
    { href: '/business', title: 'business' },
    { href: '/health', title: 'health' },
    { href: '/design', title: 'design' },
    { href: '/sport', title: 'sport' },
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
                            <div className="flex flex-col items-start cursor-pointer">
                                <Logo />

                                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-200 hover:text-[#649130] duration-200">
                                    {headerDetails.logoName}
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* social-links */}
                    <div className="items-center hidden gap-8 lg:flex">
                        <TiSocialFacebook className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                        <AiOutlineTwitter className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                        <IoLogoInstagram className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
                    </div>

                    {/* ulits wrapper */}
                    <div className="flex items-center">
                        {/* search bar */}
                        <SearchBar />

                        {/* theme switch */}
                        <ThemeSwitch />
                    </div>
                </header>

                {/* menu/tab small device */}
                <NavMobile headerNavLinks={headerNavLinks} />
            </div>

            {/* menu/tab large device */}
            <div className="sticky top-0 z-40 hidden dark:bg-[#121212] bg-white dark:border-[#42404d] border-b shadow-sm lg:block">
                <nav className="flex container gap-10 py-4 text-[.85rem]">
                    {headerNavLinks.map((link) => (
                        <Link key={link.title} href={link.href}>
                            <span className="uppercase cursor-pointer">{link.title}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Header;
