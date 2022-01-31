import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedPost = () => {
    const img =
        'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp';

    return (
        <div className="container flex flex-col lg:flex-row">
            {/* image container */}
            <div className="relative flex-1 min-h-[300px]">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>

            {/* content */}
            <div className="flex-1 p-[50px] flex flex-col bg-[#f8f9fa] gap-2">
                {/* caption */}
                <span className="uppercase text-[0.9rem] tracking-wider text-gray-500">
                    editor's pick
                </span>
                {/* title */}
                <h2 className="text-[26px] font-medium leading-8">
                    News Needs to Meet Its Audiences Where They Are
                </h2>
                {/* text */}
                <p className="text-[0.9rem] text-gray-600 font-light mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero
                    obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim
                    praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo
                    veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium
                    beatae?
                </p>
                {/* meta data */}
                <div className="flex flex-col gap-2 text-[0.8rem] text-[#b4b4b4]">
                    <div>
                        {/* author name */}
                        <Link href="#">
                            <span className="text-black cursor-pointer">Dave Rogas</span>
                        </Link>
                        {' in '}
                        {/* post category */}
                        <Link href="#">
                            <span className="text-black cursor-pointer">Food</span>
                        </Link>
                    </div>
                    <span>31 January 2022</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
