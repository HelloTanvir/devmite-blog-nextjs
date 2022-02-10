/* eslint-disable no-param-reassign */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

interface Props {
    setRegularPosts: Dispatch<
        SetStateAction<
            {
                imgSrc: string;
                title: string;
                text: string;
                author: string;
                postCategory: string;
                date: string;
                authorUrl: string;
                categoryUrl: string;
            }[]
        >
    >;
    itemsLength: number;
    itemsPerPage?: number;
    allPosts: {
        imgSrc: string;
        title: string;
        text: string;
        author: string;
        postCategory: string;
        date: string;
        authorUrl: string;
        categoryUrl: string;
    }[];
}

const Paginate: React.FC<Props> = ({
    children,
    setRegularPosts,
    itemsLength,
    itemsPerPage,
    allPosts,
}) => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        if (!itemsPerPage) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            itemsPerPage = 10;
        }

        const endOffset = itemOffset + itemsPerPage;
        setRegularPosts((prev) => (allPosts ? allPosts.slice(itemOffset, endOffset) : prev));
        setPageCount(Math.ceil(itemsLength / itemsPerPage));
    }, [itemOffset, itemsLength, setRegularPosts, itemsPerPage, allPosts]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        if (!itemsPerPage) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            itemsPerPage = 10;
        }

        const newOffset = (event.selected * itemsPerPage) % itemsLength;
        setItemOffset(newOffset);
    };

    return (
        <>
            {children}

            <div className="container mt-[50px]">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<MdNavigateNext className="scale-125" />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<MdNavigateBefore className="scale-125" />}
                    // renderOnZeroPageCount={null}
                    className="flex gap-5 items-center text-[#b3b3b3] text-[0.89rem] font-medium"
                    pageLinkClassName="hover:text-black duration-200"
                    activeLinkClassName="text-black"
                    previousLinkClassName="hover:text-gray-800 duration-200"
                    nextLinkClassName="hover:text-gray-800 duration-200"
                />
            </div>
        </>
    );
};

export default Paginate;
