import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import PostMetaData from './PostMetaData';

interface Props {
    posts: {
        title: string;
        author: string;
        postCategory: string;
        date: string;
        authorUrl: string;
        categoryUrl: string;
    }[];
    postCaption: string;
}

const SidePosts = ({ posts, postCaption }: Props) => (
    <div className="flex flex-col gap-[30px]">
        {/* section title */}
        <h2 className="text-xl inline-flex max-w-max mb-5 border-b border-[#222] capitalize">
            {`${postCaption} Posts`}
        </h2>

        {/* posts */}
        {posts.map((post, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="flex gap-3">
                {/* post number */}
                <div className="text-3xl text-[#ccc]">{`0${index + 1}`}</div>

                {/* post content */}
                <div className="flex flex-col gap-2">
                    {/* title */}
                    <Link href={`/posts/${post.title}`}>
                        <h2 className="text-lg font-medium leading-6 cursor-pointer">
                            {post.title}
                        </h2>
                    </Link>

                    {/* meta data */}
                    <PostMetaData
                        author={post.author}
                        postCategory={post.postCategory}
                        date={post.date}
                        authorUrl={post.authorUrl}
                        categoryUrl={post.categoryUrl}
                    />
                </div>
            </div>
        ))}

        {/* see more button */}
        <p className="uppercase text-[#8bc34a] text-[0.83rem] cursor-pointer hover:text-[#649130] duration-150 font-medium flex items-center gap-[2px]">
            {`see more ${postCaption}`}
            <MdKeyboardArrowRight className="scale-110" />
        </p>
    </div>
);

export default SidePosts;
