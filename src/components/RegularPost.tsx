import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PostMetaData from './PostMetaData';

interface Props {
    imgSrc: string;
    title: string;
    text?: string;
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
    <div className="flex shadow-lg dark:shadow-gray-800/50">
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
            {text ? (
                <p className="text-[0.85rem] text-gray-600 dark:text-gray-400 font-light mb-2">
                    {text}
                </p>
            ) : null}

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

export default RegularPost;
