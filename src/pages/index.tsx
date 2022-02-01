import Head from 'next/head';
import FeaturedPost from '../components/FeaturedPost';
import PostsContainer from '../components/PostsContainer';
import RegularPost from '../components/RegularPost';

export default function Home() {
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

            {/* posts container */}
            <PostsContainer sectionTitle="Regular Posts">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                    <RegularPost
                        key={id}
                        imgSrc="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                        title="News Needs to Meet Its Audiences Where They Are"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                        author="Dave Rogas"
                        postCategory="Food"
                        date="31 January 2022"
                        authorUrl="#"
                        categoryUrl="#"
                    />
                ))}
            </PostsContainer>
        </div>
    );
}
