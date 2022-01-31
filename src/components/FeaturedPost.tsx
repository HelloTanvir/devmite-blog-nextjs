import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    imgSrc: string;
    caption: string;
    title: string;
    text: string;
    author: string;
    postCategory: string;
    date: string;
    authorUrl: string;
    categoryUrl: string;
}

const FeaturedPost = ({
    imgSrc,
    caption,
    title,
    text,
    author,
    postCategory,
    date,
    authorUrl,
    categoryUrl,
}: Props) => (
    <div className="container flex flex-col lg:flex-row">
        {/* image container */}
        <div className="relative flex-1 min-h-[300px]">
            <Image src={imgSrc} layout="fill" objectFit="cover" />
        </div>

        {/* content */}
        <div className="flex-1 p-[50px] flex flex-col bg-[#f8f9fa] gap-2">
            {/* caption */}
            <span className="uppercase text-[0.9rem] tracking-wider text-gray-500">{caption}</span>
            {/* title */}
            <h2 className="text-[26px] font-medium leading-8">{title}</h2>
            {/* text */}
            <p className="text-[0.9rem] text-gray-600 font-light mb-2">{text}</p>
            {/* meta data */}
            <div className="flex flex-col gap-2 text-[0.8rem] text-[#b4b4b4]">
                <div>
                    {/* author name */}
                    <Link href={authorUrl}>
                        <span className="text-black cursor-pointer">{author}</span>
                    </Link>
                    {' in '}
                    {/* post category */}
                    <Link href={categoryUrl}>
                        <span className="text-black cursor-pointer">{postCategory}</span>
                    </Link>
                </div>
                <span>{date}</span>
            </div>
        </div>
    </div>
);

export default FeaturedPost;
