import Head from 'next/head';
import SidePosts from '../../components/SidePosts';
import bookmarkedPosts from '../../data/bookmarkedPosts';

const Profile = () => (
    <div>
        <Head>
            <title>Devmite.com | Profile</title>
            <link rel="icon" href="/devicon.ico" />
        </Head>

        <div className="container flex flex-col gap-8">
            {/* user info */}
            <div className="text-lg tracking-wider text-gray-500">Hey Dave Rogers,</div>

            {/* bookmarked posts */}
            <SidePosts postCaption="Your bookmarks" posts={bookmarkedPosts} />
        </div>
    </div>
);

export default Profile;
