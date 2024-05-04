import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// class News extends Component {

const News = (props) => {
  const { category, pageSize, apiKey } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    fetchNews(page);
    // eslint-disable-next-line
  }, [page]);

  const capitalizeTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = async (pageNumber) => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNumber}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();

      setArticles(data.articles);
      setTotalArticles(data.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handlePrevButton = () => {
    // const { page } = this.state;
    if (page > 1) {
      setPage(page - 1);
      fetch(page);
    }
  };

  const handleNextButton = () => {
    // const { page, totalArticles } = this.state;
    const totalPages = Math.ceil(totalArticles / pageSize);
    if (page < totalPages) {
      setPage(page + 1);
      fetch(page);
    }
  };

  // const { articles, loading, page, totalArticles } = this.state;

  // const { pageSize, category } = props;
  document.title = `${capitalizeTitle(category)} - NewsApp`;

  return (
    <div className="container my-3">
      <h1>News Display</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                publishedAt={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrevButton}
          disabled={page === 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={handleNextButton}
          disabled={page >= Math.ceil(totalArticles / pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
