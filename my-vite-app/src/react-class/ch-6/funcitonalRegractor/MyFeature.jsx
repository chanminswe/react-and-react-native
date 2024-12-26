import React, { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleItem from "./ArticleItem";
import ArticleList from "./ArticleList";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

function MyFeature() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [articles, setArticles] = useState([
    {
      id: id.next(),
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 2",
      summary: "Article 2 Summary",
      display: "none",
    },
    {
      id: id.next(),
      title: "Article 3",
      summary: "Article 3 Summary",
      display: "none",
    },
  ]);

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeSummary(event) {
    setSummary(event.target.value);
  }

  function onClickAdd() {
    setArticles([
      ...articles,
      { id: id.next(), title: title, summary: summary, display: "none" },
    ]);

    setTitle("");
    setSummary("");
  }

  function onClickToggle(id) {
    const index = articles.findIndex((article) => article.id === id);
    const updatedArticles = [...articles];
    updatedArticles[index] = {
      ...articles[index],
      display: articles[index].display ? "" : "none",
    };
    setArticles(updatedArticles);
  }

  function onClickRemove(id) {
    const filteredList = articles.filter((article) => article.id !== id);
    setArticles(filteredList);
  }

  return (
    <>
      <AddArticle
        name="Summary List"
        title={title}
        summary={summary}
        onChangeTitle={onChangeTitle}
        onChangeSummary={onChangeSummary}
        onClickAdd={onClickAdd}
      />

      <ArticleList
        articles={articles}
        onClickToggle={onClickToggle}
        onClickRemove={onClickRemove}
      />
    </>
  );
}

export default MyFeature;
