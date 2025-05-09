import React, { useEffect, useState } from "react";
import NewsHeader from "./components/NewsHeader";
import NewsArticle from "./components/NewsArticle";
import { Typography, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Skeleton from "./components/Skeleton";
const Footer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}));

function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("general");

  async function fetchArticles(page, category) {

    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&pageSize=3&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
    const data = await response.json();
    const articles = data.articles.map(article => ({
      title: article.title, 
      description: article.description,
      image: article.urlToImage,
      author: article.author,
      publishedAt: article.publishedAt,
      url: article.url
    }))
    return articles;
  }

  useEffect(() => {
    fetchArticles(page, category).then((articles) => {
      setArticles(articles);
      setFilteredArticles(articles);
      setLoading(false);
    });
  }, [page, category]);

  const handleCategory = (e) => {
    setPage(1);
    setCategory(e);
    setSearched(false)
  }
  const handlePrevious = () => {
    if (page > 1)
      setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  function handleSearh(searhTerm) {
    setSearched(true);
    const filterd = articles.filter(article =>
      article.title.toLowerCase().includes(searhTerm.toLowerCase())
    )
    setFilteredArticles(filterd)
  }

  return (
    <>
      <NewsHeader onSearch={handleSearh} onCategoryChange={handleCategory} />
      {loading && !searched ? (
        Array.from({ length: 3 }).map((_, index) =>
          <Skeleton key={index} />
        )
      ) : (
        <>
          {filteredArticles.length === 0 ?
            (
              <Typography variant="h5" color="primary" marginTop={4} textAlign="center">No Articles Found</Typography>
            ) : filteredArticles.map((article, index) => (
              <NewsArticle key={index} {...article} />
            ))
          }
          <Footer>
            <Button variant="outlined" onClick={handlePrevious} disabled={page === 1}>Previous</Button>
            <Button variant="outlined" onClick={handleNext} disabled={filteredArticles.length < 2}>Next</Button>
          </Footer>
        </>
      )
      }

    </>
  )
}

export default App
