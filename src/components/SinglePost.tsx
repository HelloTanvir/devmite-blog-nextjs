import Image from 'next/image';
import React from 'react';
import comments from '../data/comments';
import Archives from './Archives';
import Comment from './Comment';
import PostComment from './PostComment';
import PostMetaData from './PostMetaData';
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

            {/* meta data */}
            <PostMetaData
                author={author}
                authorImg={imgSrc}
                postCategory={postCategory}
                date={date}
                authorUrl={authorUrl}
                categoryUrl={categoryUrl}
            />

            {/* post content */}
            <div className="flex flex-col gap-4">
                {texts.map((text, index) => (
                    <p
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className="text-[0.85rem] dark:text-gray-400 text-gray-600 font-light"
                    >
                        {text}
                    </p>
                ))}
            </div>

            {/* comments */}
            <div className="flex flex-col gap-[70px]">
                {/* section title */}
                <h2 className="text-xl inline-flex max-w-max mb-5 border-b border-[#222] capitalize">
                    7 comments
                </h2>

                {/* comments */}
                <div className="flex flex-col gap-[60px]">
                    {comments.map((comment) => (
                        <Comment key={comment.time} comment={comment} />
                    ))}
                </div>

                {/* post new comment */}
                <PostComment />
            </div>
        </div>

        {/* right side - related post and archives */}
        <div className="flex flex-col gap-12">
            <SidePosts postCaption="Related" posts={relatedPosts} />
            <Archives />
        </div>
    </div>
);

export default SinglePost;
