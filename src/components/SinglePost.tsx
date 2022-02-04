import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SidePosts from './SidePosts';

interface Props {
    imgSrc: string;
    title: string;
    texts: string[];
    author: string;
    postCategory: string;
    date: string;
    authorUrl: string;
    categoryUrl: string;
    relatedPosts: {
        title: string;
        author: string;
        postCategory: string;
        date: string;
        authorUrl: string;
        categoryUrl: string;
    }[];
}

const SinglePost = ({
    imgSrc,
    title,
    texts,
    author,
    postCategory,
    date,
    authorUrl,
    categoryUrl,
    relatedPosts,
}: Props) => (
    <div className="container flex flex-col lg:flex-row gap-[100px]">
        {/* left */}
        <div className="lg:flex-1 min-w-[66.666667%] flex flex-col gap-12">
            {/* image container */}
            <div className="h-[438px] relative w-full">
                <Image src={imgSrc} layout="fill" objectFit="cover" />
            </div>

            {/* title */}
            <h2 className="text-3xl font-medium cursor-pointer">{title}</h2>

            {/* author detail */}
            <div className="flex gap-4">
                {/* author image */}
                <Image
                    src={imgSrc}
                    height={40}
                    width={40}
                    objectFit="cover"
                    className="rounded-full"
                />

                <div className="flex flex-col justify-between text-[0.8rem] text-[#b4b4b4]">
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
                    <span className="font-medium">{date}</span>
                </div>
            </div>

            {/* post content */}
            <div className="flex flex-col gap-4">
                {texts.map((text, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p key={index} className="text-[0.85rem] text-gray-600 font-light">
                        {text}
                    </p>
                ))}
            </div>

            {/* comments */}
            {/* <div>comments section will be created soon</div> */}
        </div>

        {/* right side - related post */}
        <SidePosts postCaption="Related" posts={relatedPosts} />
    </div>
);

export default SinglePost;
