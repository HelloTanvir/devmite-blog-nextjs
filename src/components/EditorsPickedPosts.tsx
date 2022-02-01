import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import editorsPickedPosts from '../data/editorsPickedPosts';
import RegularPost from './RegularPost';

const EditorsPickedPosts = () => (
    <div className="flex-[2] flex flex-col gap-[30px]">
        {/* section title */}
        <h2 className="text-xl inline-flex max-w-max mb-5 border-b border-[#222] capitalize">
            Editor's Pick
        </h2>

        {/* content */}
        <div className="flex gap-[30px] flex-col lg:flex-row">
            {/* highlighted post */}
            <div className="flex flex-1 flex-col gap-[10px]">
                {/* image container */}
                <div className="relative w-full h-[260px] lg:h-[210px] mb-3">
                    <Image
                        src="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                        layout="fill"
                    />
                </div>

                {/* title */}
                <Link href={`/posts/${editorsPickedPosts[0].title}`}>
                    <h2 className="text-[20px] font-medium leading-6 cursor-pointer">
                        {editorsPickedPosts[0].title}
                    </h2>
                </Link>

                {/* text */}
                <p className="text-[0.9rem] text-gray-600 font-light">
                    {editorsPickedPosts[0].text}
                </p>

                {/* meta data */}
                <div className="flex flex-col gap-[2px] text-[0.8rem] text-[#b4b4b4]">
                    <div>
                        {/* author name */}
                        <Link href={editorsPickedPosts[0].authorUrl}>
                            <span className="text-black cursor-pointer">
                                {editorsPickedPosts[0].author}
                            </span>
                        </Link>
                        {' in '}
                        {/* post category */}
                        <Link href={editorsPickedPosts[0].categoryUrl}>
                            <span className="text-black cursor-pointer">
                                {editorsPickedPosts[0].postCategory}
                            </span>
                        </Link>
                    </div>
                    <span>{editorsPickedPosts[0].date}</span>
                </div>
            </div>

            {/* editor's picked more posts */}
            <div className="flex-1 flex flex-col gap-[30px]">
                {editorsPickedPosts
                    .filter((post, index) => index !== 0)
                    .map((post, index) => (
                        <RegularPost
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            imgSrc={post.imgSrc}
                            title={post.title}
                            author={post.author}
                            postCategory={post.postCategory}
                            date={post.date}
                            authorUrl={post.authorUrl}
                            categoryUrl={post.categoryUrl}
                        />
                    ))}
            </div>
        </div>
    </div>
);

export default EditorsPickedPosts;
