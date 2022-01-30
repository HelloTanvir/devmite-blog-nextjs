import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import UserLogin from './UserLogin';

// to test the data
const headerDetails = { logoName: 'Devmite.com' };
const headerNavLinks = [
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
];

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-screen py-4 flex-col-1 h-22">
            <div>
                <Link href="/" aria-label="Devmite.com">
                    <div className="relative flex items-center justify-between cursor-pointer ">
                        <div className="absolute mb-8 ">
                            <Logo />
                        </div>
                        <div className="mb-4">
                            {typeof headerDetails.logoName === 'string' ? (
                                <div className="h-6 mt-8 ml-6 text-2xl font-semibold text-gray-900 dark:text-gray-200 sm:block">
                                    {headerDetails.logoName}
                                </div>
                            ) : (
                                headerDetails.logoName
                            )}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="pt-1 pl-16 ml-16">
                <SearchBar />
            </div>

            <div className="flex items-center text-base leading-5 ">
                <div className="hidden mr-6 space-x-8 sm:block ">
                    {headerNavLinks.map((link) => (
                        <Link key={link.title} href={link.href}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                href="#"
                                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-300"
                            >
                                {link.title}
                            </a>
                        </Link>
                    ))}
                </div>

                <div className="">
                    <UserLogin />
                </div>
                <div className="mr-4">
                    <ThemeSwitch />
                </div>
                <MobileNav />
            </div>
        </header>
    );
}

export default Header;
