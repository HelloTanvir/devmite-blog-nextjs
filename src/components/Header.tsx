import Link from 'next/link';
import React from 'react';
import IconSet from './IconSet';
import Logo from './Logo';
import NavMobile from './NavMobile';

const headerDetails = { logoName: 'Devmite.com' };

const headerNavLinks = [
    { href: '/', title: 'home' },
    { href: '/shop', title: 'shop' },
    { href: '/', title: 'business' },
    { href: '/', title: 'health' },
    { href: '/', title: 'design' },
    { href: '/', title: 'sport' },
    { href: '/', title: 'politics' },
    { href: '/', title: 'contact' },
];

function Header() {
    return (
        <>
            <div className="container flex justify-between lg:block">
                <header className="flex flex-col gap-5 lg:flex-row lg:items-center py-[30px]">
                    {/* left */}
                    <div className="flex-1 flex flex-col gap-[10px]">
                        {/* icons on mobile view */}
                        <IconSet className="flex lg:hidden gap-4 items-center w-[245px] md:w-max flex-wrap max-h-10 overflow-hidden" />

                        {/* logo */}
                        <Link href="/" aria-label="Devmite.com">
                            <div className="flex items-center cursor-pointer max-w-max">
                                <Logo />

                                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-200 hover:text-[#649130] duration-200">
                                    {headerDetails.logoName}
                                </div>
                            </div>
                        </Link>
                    </div>

                    <IconSet className="items-center hidden gap-8 lg:flex" />
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
                            <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-sm cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                                login
                            </span>
                        </Link>

                        <Link href="/register">
                            <span className="px-3 py-1 text-sm tracking-wide duration-200 border border-[#8bc34a] rounded-sm cursor-pointer hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 dark:hover:border-gray-500">
                                register
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
