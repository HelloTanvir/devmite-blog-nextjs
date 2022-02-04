import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';

interface Props {
    author: string;
    authorImg?: string;
    postCategory: string;
    date: string;
    authorUrl: string;
    categoryUrl: string;
    isBookmarked?: boolean;
}

const PostMetaData = ({
    author,
    authorImg,
    postCategory,
    date,
    authorUrl,
    categoryUrl,
    isBookmarked = false,
}: Props) => (
    <div className="flex gap-4">
        {/* author image */}
        {authorImg ? (
            <Image
                src={authorImg}
                height={40}
                width={40}
                objectFit="cover"
                className="rounded-full"
            />
        ) : null}

        <div
            className={`flex flex-col ${
                authorImg ? 'justify-between' : 'gap-[2px]'
            } text-[0.8rem] text-[#b4b4b4]`}
        >
            <div>
                {/* author name */}
                <Link href={authorUrl}>
                    <span className="text-black dark:text-[#3649b4] cursor-pointer">{author}</span>
                </Link>
                {' in '}
                {/* post category */}
                <Link href={categoryUrl}>
                    <span className="text-black dark:text-[#3649b4] cursor-pointer">
                        {postCategory}
                    </span>
                </Link>
            </div>

            <div className="flex items-center gap-1">
                {/* date */}
                <span className="font-medium">{date}</span>

                {` • `}

                {/* bookmark */}
                {isBookmarked ? (
                    <BsBookmarksFill className="cursor-pointer" />
                ) : (
                    <BsBookmarks className="cursor-pointer" />
                )}
            </div>
        </div>
    </div>
);

export default PostMetaData;
