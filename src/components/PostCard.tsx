import React from 'react';

// export const getStaticProps = async () => {
//   const result = await axios.get("http://127.0.0.1:8000/blog/posts/");
//   const data = await result.data;

//   return {
//     props: { posts: data }, // we map posts to our data and define it as a prop so we can use it later as a pro for exporting into client side
//   };
// };

function PostCard(post) {
    console.log(post);
    return (
        <div>
            <p>ash</p>
        </div>
    );
}

export default PostCard;
