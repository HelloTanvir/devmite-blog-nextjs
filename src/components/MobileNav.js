import { useState } from "react";
import Link from "next/link";
import { UserCircleIcon, MenuIcon, PencilIcon } from "@heroicons/react/outline";

// import headerNavLinks from "@/data/headerNavLinks";
const headerNavLinks = [
  { href: "/blog", title: "Blog" },
  { href: "/tags", title: "Tags" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About" },
];

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-4 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-full top-16 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          <div>
            {headerNavLinks.map((link) => (
              <div
                key={link.title}
                className=" font-bold tracking-widest px-12 py-4"
              >
                <Link
                  href={link.href}
                  // below to be removed later after setting multicolor screen
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-row space-x-4 font-bold tracking-widest px-12 py-4 mt-2">
            <div className="flex flex-row space-x-2">
              <Link href="#" aria-label="Devmite.com">
                <div>
                  <p className="font-bold inline ">Write for Us</p>
                </div>
              </Link>
              {/* <Link href="#" aria-label="Devmite.com">
                <PencilIcon className="h-6 mb-2 " />
              </Link> */}
            </div>
          </div>

          <Link href="#" aria-label="Devmite.com">
            <div className="font-bold tracking-widest px-12 py-4 mb-2">
              <p className=" inline font-bold">Register</p>
            </div>
          </Link>

          <Link href="#" aria-label="Devmite.com">
            <div className="flex space-x-2  px-8 py-4 w-18 ">
              <div className="flex space-x-2 border-2 px-18 rounded-full py-4 w-28 justify-center border-gray-900 dark:border-gray-400  ">
                <MenuIcon className="h-6 text-gray-900 dark:text-gray-300 text-2xl" />
                <UserCircleIcon className="h-6 text-gray-900 dark:text-gray-300 text-4xl" />
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
