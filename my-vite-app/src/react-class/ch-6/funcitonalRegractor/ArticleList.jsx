import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles, onClickToggle, onClickRemove }) {
  return (
    <>
      <ul>
        {articles.map((i) => (
          <ArticleItem
            key={i.id}
            article={i}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    </>
  );
}

export default ArticleList;

//id.next() 1 
//id.next() 2 
//id.next() 3
//id.next() 4