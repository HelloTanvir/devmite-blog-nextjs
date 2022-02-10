import React, { FormEvent, useState } from 'react';
import { CommentsType } from '../data/comments';
import SingleComment from './SingleComment';

interface Props {
    comment: CommentsType;
}

const Comment = ({ comment }: Props) => {
    const [isReplying, setIsReplying] = useState(false);

    const handleComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsReplying(false);
    };

    if (comment.hasReply) {
        return (
            <>
                {/* comment */}
                <SingleComment
                    comment={comment}
                    isReplying={isReplying}
                    setIsReplying={setIsReplying}
                    handleComment={handleComment}
                />

                {/* replies */}
                <div className="pl-[40px] pt-[50px]">
                    {comment.replies?.map((reply) => (
                        <Comment key={reply.time} comment={reply} />
                    ))}
                </div>
            </>
        );
    }

    return (
        <SingleComment
            comment={comment}
            isReplying={isReplying}
            setIsReplying={setIsReplying}
            handleComment={handleComment}
        />
    );
};

export default Comment;
