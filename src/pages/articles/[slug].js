import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const result = await axios.get("http://127.0.0.1:8000/blog/posts/");
  const data = await result.data;

  // map data to an array of path objects with params (slug)
  const paths = data.results.map((articles) => {
    return {
      params: { slug: articles.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// props added to get specific detail
export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const result = await axios.get(`http://127.0.0.1:8000/blog/posts/${slug}`);
  const data = await result.data;

  return {
    props: { article: data },
  };
};

function Article({ article }) {
  //   console.log(article);
  //   strip the api json of the html tags
  let content = article.content.replace(/(<([^>]+)>)/gi, "");
  return (
    <div>
      <h1 className="text-2xl">Articles</h1>
      <p>{article.title}</p>
      <p>{content}</p>
    </div>
  );
}

export default Article;
