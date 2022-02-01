import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useSpringCarousel } from 'react-spring-carousel-js';
import featuredPosts from '../data/featuredPosts';
import FeaturedPost from './FeaturedPost';

const Slider = () => {
    const { carouselFragment, slideToNextItem, slideToPrevItem } = useSpringCarousel({
        // withThumbs: false,
        withLoop: true,
        items: featuredPosts.map((post, index) => ({
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
        })),
    });

    return (
        <div className="relative">
            <AiOutlineArrowLeft
                className="absolute top-1/2 hidden lg:block -translate-y-1/2 left-0 z-30 cursor-pointer bg-white text-4xl text-gray-600 p-2"
                onClick={slideToPrevItem}
            />

            {carouselFragment}

            <AiOutlineArrowRight
                className="absolute top-1/2 hidden lg:block -translate-y-1/2 right-0 z-30 cursor-pointer bg-white text-4xl text-gray-600 p-2"
                onClick={slideToNextItem}
            />
        </div>
    );
};

export default Slider;
