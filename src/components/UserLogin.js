import React from "react";
import Link from "next/link";

import { UserCircleIcon, MenuIcon, PencilIcon } from "@heroicons/react/outline";

function UserLogin() {
  return (
    <div className="">
      <div className="hidden md:flex items-center space-x-8 justify-end mt-1 text-gray-900 dark:text-gray-300 ">
        <div className="flex flex-row space-x-2  cursor-pointer">
          <Link href="#" aria-label="Devmite.com">
            <div>
              <p className="hidden xl:inline font-semibold">Write for Us</p>
            </div>
          </Link>
          {/* <Link href="#" aria-label="Devmite.com">
            <PencilIcon className="h-6" />
          </Link> */}
        </div>

        <Link href="#" aria-label="Devmite.com">
          <div className="cursor-pointer">
            <p className="hidden md:inline font-semibold ">Register</p>
          </div>
        </Link>

        <Link href="#" aria-label="Devmite.com">
          <div className="md:flex md:items-center md:space-x-2 md:border-2 md:p-2 md:rounded-full cursor-pointer">
            <MenuIcon className="md:h-4 text-gray-900 dark:text-gray-300" />
            <UserCircleIcon className="md:h-4 text-gray-900 dark:text-gray-300" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
