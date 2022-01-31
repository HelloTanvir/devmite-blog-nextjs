import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    imgSrc: string;
    title: string;
    text: string;
    author: string;
    postCategory: string;
    date: string;
    authorUrl: string;
    categoryUrl: string;
}

const RegularPost = ({
    imgSrc,
    title,
    text,
    author,
    postCategory,
    date,
    authorUrl,
    categoryUrl,
}: Props) => (
    <div className="flex">
        {/* image container */}
        <div className="relative flex-1">
            <Image src={imgSrc} layout="fill" objectFit="cover" />
        </div>

        {/* content */}
        <div className="flex-[2] px-[20px] py-[10px] flex flex-col gap-2">
            {/* title */}
            <Link href={`/posts/${title}`}>
                <h2 className="text-[14px] font-medium cursor-pointer">{title}</h2>
            </Link>

            {/* text */}
            <p className="text-[0.85rem] text-gray-600 font-light mb-2">{text}</p>

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

export default RegularPost;
