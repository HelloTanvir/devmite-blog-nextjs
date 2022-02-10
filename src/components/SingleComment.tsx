import Image from 'next/image';
import React, { FormEvent } from 'react';
import { CommentsType } from '../data/comments';

interface Props {
    comment: CommentsType;
    isReplying: boolean;
    setIsReplying: React.Dispatch<React.SetStateAction<boolean>>;
    handleComment: (e: FormEvent<HTMLFormElement>) => void;
}

const SingleComment = ({ comment, isReplying, setIsReplying, handleComment }: Props) => (
    <div className="flex gap-[30px]">
        {/* image container */}
        <div className="relative min-w-[50px] min-h-[50px] h-[50px] w-[50px]">
            <Image src={comment.image} objectFit="cover" layout="fill" className="rounded-full" />
        </div>

        {/* content */}
        <div className="flex flex-col gap-[3px]">
            {/* name */}
            <span className="text-lg capitalize">{comment.name}</span>

            {/* time */}
            <span className="text-[13px] uppercase text-[#ccc] tracking-wide">{comment.time}</span>

            {/* text */}
            <span className="text-[0.9rem] text-gray-500">{comment.text}</span>

            {isReplying ? (
                // text field
                <form onSubmit={handleComment} className="mt-[14px] flex flex-col gap-2 items-end">
                    <textarea
                        rows={3}
                        className="w-full px-3 py-3 bg-gray-100 rounded-lg outline-none resize-none dark:bg-gray-700"
                    />

                    {/* comment button */}
                    <div className="flex gap-6">
                        <button
                            type="button"
                            onClick={() => setIsReplying(false)}
                            className="text-sm tracking-wider uppercase duration-150 w-max"
                        >
                            cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-[#e3e3e3] dark:bg-[#353434] dark:hover:bg-[#252525] text-sm px-[10px] py-[5px] hover:bg-gray-300 w-max duration-150 uppercase tracking-wider"
                        >
                            comment
                        </button>
                    </div>
                </form>
            ) : (
                // reply button
                <button
                    type="button"
                    onClick={() => setIsReplying(true)}
                    className="bg-[#e3e3e3] dark:bg-[#353434] dark:hover:bg-[#252525] text-sm px-[10px] py-[5px] mt-[14px] hover:bg-gray-300 w-max duration-150 uppercase tracking-wider"
                >
                    reply
                </button>
            )}
        </div>
    </div>
);

export default SingleComment;
