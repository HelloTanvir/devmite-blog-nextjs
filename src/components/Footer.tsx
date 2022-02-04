import Link from 'next/link';
import React from 'react';
import SubscribeByEmail from './SubscribeByEmail';

function Footer() {
    return (
        <div>
            <div className="bg-[#f8f9fa] dark:bg-[#141414] py-[100px]">
                <div className="container flex flex-col items-center gap-6 md:flex-row lg:gap-36">
                    {/* left side */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[1.2rem] font-medium">Newsletter Subscribe</h2>
                        <p className="text-[0.9rem] text-gray-800 dark:text-gray-400 tracking-tight font-light text-justify w-full lg:max-w-[445px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                            asperiores quam quas tempora ut ipsa doloremque commodi odit placeat
                            tempore ducimus quo modi, deserunt qui ullam eligendi ea quaerat
                            consequuntur!
                        </p>
                    </div>

                    {/* right side */}
                    <SubscribeByEmail />
                </div>
            </div>

            {/* copyright and year */}
            <div className="flex items-center justify-center py-8 sm:flex-row">
                <p className="mb-4 text-sm text-gray-500">
                    <Link href="/">Devmite.com</Link>
                    {` • `}
                    {`© ${new Date().getFullYear()}`} {` • `}All rights reserved.
                </p>
            </div>
        </div>
    );
}
export default Footer;
