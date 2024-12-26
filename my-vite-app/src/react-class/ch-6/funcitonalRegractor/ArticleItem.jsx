import React from "react";

function ArticleItem({ article, onClickToggle, onClickRemove }) {
  return (
    <li>
      <a
        href={`#${article.id}`}
        title="toggle Summary"
        onClick={onClickToggle.bind(null, article.id)}
      >
        {article.title}
      </a>
      &nbsp;
      <a
        href={`#${article.id}`}
        title="Remove"
        onClick={onClickRemove.bind(null, article.id)}
      >
        ✗
      </a>
      <p style={{ display: article.display }}>{article.summary}</p>
    </li>
  );
}

export default ArticleItem;
