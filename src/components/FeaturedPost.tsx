import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PostMetaData from './PostMetaData';

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
        <div className="flex-1 p-6 lg:p-[50px] flex flex-col bg-[#f8f9fa] dark:bg-[#141414] gap-2">
            {/* caption */}
            <span className="uppercase text-[0.9rem] tracking-wider text-gray-500">{caption}</span>

            {/* title */}
            <Link href={`/posts/${title}`}>
                <h2 className="text-[26px] font-medium leading-8 cursor-pointer pointer-events-auto">
                    {title}
                </h2>
            </Link>

            {/* text */}
            <p className="text-[0.9rem] text-gray-600 dark:text-gray-400 font-light mb-2">{text}</p>

            {/* meta data */}
            <PostMetaData
                author={author}
                postCategory={postCategory}
                date={date}
                authorUrl={authorUrl}
                categoryUrl={categoryUrl}
            />
        </div>
    </div>
);

export default FeaturedPost;
