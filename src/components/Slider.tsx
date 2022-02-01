import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { CgBorderStyleSolid } from 'react-icons/cg';
import { useSpringCarousel } from 'react-spring-carousel-js';
import featuredPosts from '../data/featuredPosts';
import FeaturedPost from './FeaturedPost';

const Slider = () => {
    const items = featuredPosts.map((post, index) => ({
        id: `FeaturedPost-${index + 1}`,
        renderItem: (
            <FeaturedPost
                imgSrc={post.imgSrc}
                caption={post.caption}
                title={post.title}
                text={post.text}
                author={post.author}
                postCategory={post.postCategory}
                date={post.date}
                authorUrl={post.authorUrl}
                categoryUrl={post.categoryUrl}
            />
        ),
    }));

    const {
        carouselFragment,
        slideToNextItem,
        slideToPrevItem,
        slideToItem,
        getCurrentActiveItem,
    } = useSpringCarousel({
        withLoop: true,
        items,
    });

    const [activeSlide, setActiveSlide] = useState(items[0].id);

    const handleSlide = (id: string) => {
        setActiveSlide(id);
        slideToItem(id);
    };

    return (
        <div className="flex flex-col gap-[100px]">
            <div className="relative">
                <AiOutlineArrowLeft
                    className="absolute left-0 z-30 hidden p-2 text-4xl text-gray-600 -translate-y-1/2 bg-white cursor-pointer top-1/2 lg:block"
                    onClick={() => {
                        slideToPrevItem();
                        const { id } = getCurrentActiveItem();
                        setActiveSlide(id);
                    }}
                />

                {carouselFragment}

                <AiOutlineArrowRight
                    className="absolute right-0 z-30 hidden p-2 text-4xl text-gray-600 -translate-y-1/2 bg-white cursor-pointer top-1/2 lg:block"
                    onClick={() => {
                        slideToNextItem();
                        const { id } = getCurrentActiveItem();
                        setActiveSlide(id);
                    }}
                />
            </div>

            <div className="flex justify-center space-x-4">
                {items.map((e) => (
                    <CgBorderStyleSolid
                        key={e.id}
                        onClick={() => handleSlide(e.id)}
                        className={
                            activeSlide === e.id
                                ? 'cursor-pointer duration-150 text-3xl text-[#8bc34a]'
                                : 'cursor-pointer duration-150 text-3xl text-gray-500'
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
