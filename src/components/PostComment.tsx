import React, { FormEvent, useState } from 'react';

const PostComment = () => {
    const [text, setText] = useState('');

    const handleComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ text });
        setText('');
    };

    return (
        <div className="flex flex-col gap-[40px]">
            {/* section title */}
            <h2 className="text-xl inline-flex max-w-max mb-5 border-b border-[#222]">
                Leave a comment
            </h2>

            <form onSubmit={handleComment} className="mt-[14px] flex flex-col gap-2 items-end">
                <textarea
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-3 py-3 bg-gray-100 rounded-lg outline-none resize-none dark:bg-gray-700"
                />

                {/* comment button */}
                <div className="flex gap-6">
                    <button
                        type="button"
                        onClick={() => setText('')}
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
        </div>
    );
};

export default PostComment;
