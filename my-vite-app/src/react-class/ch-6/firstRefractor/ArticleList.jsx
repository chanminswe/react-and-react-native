import React, { Component } from "react";

export class ArticleList extends Component {
  render() {
    const { articles, onClickToggle, onClickRemove } = this.props;
    return (
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a
              href={`#${article.id}`}
              title="Toggle Summary"
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
        ))}
      </ul>
    );
  }
}

export default ArticleList;
