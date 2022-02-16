import Head from 'next/head';
import { useState } from 'react';
import EditorsPickedPosts from '../components/EditorsPickedPosts';
import FeaturedPost from '../components/FeaturedPost';
import Paginate from '../components/Paginate';
import PostsContainer from '../components/PostsContainer';
import RegularPost from '../components/RegularPost';
import SidePosts from '../components/SidePosts';
import Slider from '../components/Slider';
import rPosts from '../data/regularPosts';
import trendingPosts from '../data/trendingPosts';

export default function Home() {
    const [regularPosts, setRegularPosts] = useState(rPosts);

    return (
        <div>
            <Head>
                <title>Devmite.com</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

            {/* featured posts slider */}
            <Slider />

            {/* editor's pick and trending */}
            <div className="container mt-[100px] gap-[30px] flex flex-col lg:flex-row">
                {/* editor's pick */}
                <EditorsPickedPosts />

                {/* trending */}
                <div className="flex-1">
                    <SidePosts postCaption="trending" posts={trendingPosts} />
                </div>
            </div>

            {/* new post */}
            <div className="mt-[100px]">
                <FeaturedPost
                    imgSrc="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                    caption="editor's pick"
                    title="News Needs to Meet Its Audiences Where They Are"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?"
                    author="Dave Rogas"
                    postCategory="Food"
                    date="31 January 2022"
                    authorUrl="#"
                    categoryUrl="#"
                />
            </div>

            {/* posts container with pagination */}
            <Paginate
                setRegularPosts={setRegularPosts}
                itemsLength={rPosts.length}
                itemsPerPage={10}
                allPosts={rPosts}
            >
                <PostsContainer sectionTitle="Regular Posts">
                    {regularPosts.map((post, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index}>
                            {/* large device */}
                            <div className="hidden md:block">
                                <RegularPost
                                    imgSrc={post.imgSrc}
                                    title={post.title}
                                    text={post.text}
                                    author={post.author}
                                    postCategory={post.postCategory}
                                    date={post.date}
                                    authorUrl={post.authorUrl}
                                    categoryUrl={post.categoryUrl}
                                />
                            </div>

                            {/* small device */}
                            <div className="block md:hidden">
                                <RegularPost
                                    imgSrc={post.imgSrc}
                                    title={post.title}
                                    // text={post.text}
                                    author={post.author}
                                    postCategory={post.postCategory}
                                    date={post.date}
                                    authorUrl={post.authorUrl}
                                    categoryUrl={post.categoryUrl}
                                />
                            </div>
                        </div>
                    ))}
                </PostsContainer>
            </Paginate>
        </div>
    );
}
