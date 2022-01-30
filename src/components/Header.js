import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import ThemeSwitch from "./ThemeSwitch";
import UserLogin from "./UserLogin";

// to test the data
const headerDetails = { logoName: "Devmite.com" };
const headerNavLinks = [
  { href: "/blog", title: "Blog" },
  { href: "/tags", title: "Tags" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
];

function Header() {
  return (
    <header className=" sticky top-0 z-50 flex flex-col-1 items-center justify-between py-4 w-screen h-22">
      <div>
        <Link href="/" aria-label="Devmite.com">
          <div className=" relative flex items-center justify-between cursor-pointer">
            <div className="absolute mb-8 ">
              <Logo />
            </div>
            <div className="mb-4">
              {typeof headerDetails.logoName === "string" ? (
                <div className="mt-8 ml-6  text-gray-900 dark:text-gray-200 h-6 text-2xl font-semibold sm:block">
                  {headerDetails.logoName}
                </div>
              ) : (
                headerDetails.logoName
              )}
            </div>
          </div>
        </Link>
      </div>

      <div className="pt-1 ml-16 pl-16">
        <SearchBar />
      </div>

      <div className="flex items-center text-base leading-5   ">
        <div className="space-x-8 mr-6 hidden sm:block ">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-300 font-medium">
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
