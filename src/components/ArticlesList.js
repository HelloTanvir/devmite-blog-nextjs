import React, { useState, useEffect } from "react";
import axios from "axios";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedArticle(res.data[0]);
        console.log(res.data);
      } catch (error) {
        // res.status(404).json({
        //   error:
        //     error.message == "Cannot read property 'data' of undefined"
        //       ? "Article not found"
        //       : error.message,
        //   slug: slug,
        // });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_APP_API_URL}/api/blog/posts`
        );
        setArticles(res.data[0]);
        console.log(res.data);
      } catch (error) {
        // res.status(404).json({
        //   error:
        //     error.message == "Cannot read property 'data' of undefined"
        //       ? "Article not found"
        //       : error.message,
        //   slug: slug,
        // });
      }
    };

    fetchArticles();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getArticles = () => {
    let list = [];
    let result = [];

    articles.map((Posts) => {
      return list.push();
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };
  return (
    <div>
      <p> this is the Articles List </p>
      {getArticles()}
    </div>
  );
}

export default ArticlesList;
