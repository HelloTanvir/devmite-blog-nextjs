// npm install html-react-parser moment react-multi-carousel sass
import Head from 'next/head';
import FeaturedPost from '../components/FeaturedPost';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Devmite.com</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

            <FeaturedPost />
        </div>
    );
}
