import React from "react";
import Link from "next/link";
import axios from "axios";

export const getStaticProps = async () => {
  const result = await axios.get("http://127.0.0.1:8000/blog/posts/");
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
        <p className="text-4xl font-bold text-gray-800 mb-4">
          Lastest articles
        </p>
        <p className="text-2xl font-light text-gray-400">
          All article are verified by 2 experts and valdiate by the CTO
        </p>
      </div>
      <div className="w-full flex flex-row space-x-6 p-12 justify-center">
        <div className="flex flex-col w-auto md:flex-row md:w-full">
          {posts.results.map((post) => (
            <Link
              href={`articles/${encodeURIComponent(post.slug)} `}
              key={post.id}
            >
              <div className="overflow-hidden py-6 px-6 shadow-lg  rounded-lg h-90 w-60 md:w-72 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full ">
                  <img
                    alt="blog photo"
                    src="https://dummyimage.com/720x400"
                    // src="/images/blog/1.jpg"
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                      Article
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                      Supercharged !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      The new supercar is here, 543 cv and 140 000$. This is
                      best racing GT about 7 years on...
                    </p>
                    <div className="flex items-center mt-4">
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://dummyimage.com/103x103"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
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
        <div className="w-3/12 hidden md:flex ">
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
