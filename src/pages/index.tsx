import Head from 'next/head';
import { useState } from 'react';
import FeaturedPost from '../components/FeaturedPost';
import Paginate from '../components/Paginate';
import PostsContainer from '../components/PostsContainer';
import RegularPost from '../components/RegularPost';
import rPosts from '../data/regularPosts';

export default function Home() {
    const [regularPosts, setRegularPosts] = useState(rPosts);

    return (
        <div>
            <Head>
                <title>Devmite.com</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

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

            {/* posts container with pagination */}
            <Paginate
                setRegularPosts={setRegularPosts}
                itemsLength={rPosts.length}
                itemsPerPage={10}
                allPosts={rPosts}
            >
                <PostsContainer sectionTitle="Regular Posts">
                    {regularPosts.map((post, index) => (
                        <RegularPost
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            imgSrc={post.imgSrc}
                            title={post.title}
                            text={post.text}
                            author={post.author}
                            postCategory={post.postCategory}
                            date={post.date}
                            authorUrl={post.authorUrl}
                            categoryUrl={post.categoryUrl}
                        />
                    ))}
                </PostsContainer>
            </Paginate>
        </div>
    );
}
