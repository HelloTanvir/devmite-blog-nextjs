import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
    const result = await axios.get('http://127.0.0.1:8000/blog/posts/');
    const data = await result.data;

    return {
        props: { posts: data }, // we map posts to our data and define it as a prop so we can use it later as a pro for exporting into client side
    };
};

function index({ posts }) {
    console.log(posts);
    return (
        <div>
            <div className="px-14 title">
                <p className="mb-4 text-4xl font-bold text-gray-800">Lastest articles</p>
                <p className="text-2xl font-light text-gray-400">
                    All article are verified by 2 experts and valdiate by the CTO
                </p>
            </div>
            <div className="flex flex-row justify-center w-full p-12 space-x-6">
                <div className="flex flex-col w-auto md:flex-row md:w-full">
                    {posts.results.map((post) => (
                        <Link href={`articles/${encodeURIComponent(post.slug)} `} key={post.id}>
                            <div className="px-6 py-6 m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-72">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="block w-full h-full ">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                        alt="blog photo"
                                        src="https://dummyimage.com/720x400"
                                        // src="/images/blog/1.jpg"
                                        className="object-cover w-full max-h-40"
                                    />
                                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                                        <p className="font-medium text-indigo-500 text-md">
                                            Article
                                        </p>
                                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                            Supercharged !
                                        </p>
                                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                            The new supercar is here, 543 cv and 140 000$. This is
                                            best racing GT about 7 years on...
                                        </p>
                                        <div className="flex items-center mt-4">
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#" className="relative block">
                                                <img
                                                    alt="profil"
                                                    src="https://dummyimage.com/103x103"
                                                    className="object-cover w-10 h-10 mx-auto rounded-full "
                                                />
                                            </a>
                                            <div className="flex flex-col justify-between ml-4 text-sm">
                                                <p className="text-gray-800 dark:text-white">
                                                    Jean Jacques
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300">
                                                    20 mars 2029 - 6 min read
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="hidden w-3/12 md:flex ">
                    <p>Category and recent post widget </p>
                </div>
            </div>
        </div>
    );
}

export default index;

// ######################################################################

// export const getStaticProps = async () => {
//   const res = await fetch("http://127.0.0.1:8000/blog/posts/");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: { ninjas: data },
//   };
// };

// const Ninjas = ({ ninjas }) => {
//   console.log(ninjas);

//   return (
//     <div>
//       <h1>All Ninjas</h1>
//       {ninjas.results.map((ninja) => (
//         <Link href={"/ninjas/" + ninja.slug} key={ninja.slug}>
//           <a>
//             <h3>{ninja.title}</h3>
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Ninjas;
