import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 ">
            <div className="w-screen px-4 pt-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        {/* Socials */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-900 dark:text-gray-100">
                                <span>Contacts</span>
                            </p>
                            <ul className="mt-2 space-y-2 ">
                                <li className="text-gray-600 dark:text-gray-300">
                                    <Link href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="text-xl transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                            viewBox="0 0 1792 1792"
                                        >
                                            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <Link href="/">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="text-xl transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <Link href="/">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="text-xl transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <Link href="/">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="text-xl transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <Link href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="w-6 h-6 text-xl transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Category column */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-900 dark:text-gray-100">
                                More From Devmite
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li className="text-gray-600 dark:text-gray-300">
                                    <a
                                        href="/"
                                        className="w-6 h-6 transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                    >
                                        Our Team
                                    </a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <a
                                        href="/"
                                        className="w-6 h-6 transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <a
                                        href="/"
                                        className="w-6 h-6 transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                    >
                                        Support Us
                                    </a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <a
                                        href="/"
                                        className="w-6 h-6 transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                    >
                                        Partner With Us
                                    </a>
                                </li>
                                <li className="text-gray-600 dark:text-gray-300">
                                    <a
                                        href="/"
                                        className="w-6 h-6 transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                                    >
                                        Terms of Use and Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscription  */}
                    <div className="md:max-w-md lg:col-span-2">
                        <span className="text-base font-medium tracking-wide text-gray-900 dark:text-gray-100">
                            Join 1,000+ others and never miss out on new tips, tutorials, and more.
                        </span>
                        <form className="flex flex-col mt-4 text-gray-600 md:flex-row dark:text-gray-600">
                            <input
                                placeholder="Email"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            />
                            <button
                                type="submit"
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm italic text-gray-900 dark:text-gray-100">
                            Start and enjoy your journey into Cloud, Devops and automation.
                        </p>
                    </div>
                </div>

                {/* copyright and year */}
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        <Link href="/">Devmite.com</Link>
                        {` • `}
                        {`© ${new Date().getFullYear()}`} {` • `}All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
