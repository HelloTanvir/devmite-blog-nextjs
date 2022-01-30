import { MenuIcon, UserCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';


function UserLogin() {
    return (
        <div className="">
            <div className="items-center justify-end hidden mt-1 space-x-8 text-gray-900 md:flex dark:text-gray-300 ">
                <div className="flex flex-row space-x-2 cursor-pointer">
                    <Link href="#" aria-label="Devmite.com">
                        <div>
                            <p className="hidden font-semibold xl:inline">Write for Us</p>
                        </div>
                    </Link>
                    {/* <Link href="#" aria-label="Devmite.com">
            <PencilIcon className="h-6" />
          </Link> */}
                </div>

                <Link href="#" aria-label="Devmite.com">
                    <div className="cursor-pointer">
                        <p className="hidden font-semibold md:inline ">Register</p>
                    </div>
                </Link>

                <Link href="#" aria-label="Devmite.com">
                    <div className="cursor-pointer md:flex md:items-center md:space-x-2 md:border-2 md:p-2 md:rounded-full">
                        <MenuIcon className="text-gray-900 md:h-4 dark:text-gray-300" />
                        <UserCircleIcon className="text-gray-900 md:h-4 dark:text-gray-300" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;
