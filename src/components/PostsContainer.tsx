import React from 'react';

interface Props {
    sectionTitle: string;
}

const PostsContainer: React.FC<Props> = ({ sectionTitle, children }) => (
    <div className="container mt-[100px]">
        {/* section title */}
        <h2 className="text-xl inline-flex mb-14 border-b border-[#222]">{sectionTitle}</h2>

        {/* posts */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:gap-y-8 lg:grid-cols-2">{children}</div>
    </div>
);

export default PostsContainer;
