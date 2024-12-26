import React, { Component } from "react";

export default class ArticleItem extends Component {
  render() {
    
    // props article ?
    const { article, onClickToggle, onClickRemove } = this.props;

    // br lo [] ?
    // const exampleArticle = [article];

    return (
        //loop []
      <li key={article.id}>
        <a
          href={`#${article.id}`}
          title="ToggleSummary"
          onClick={onClickToggle.bind(null, article.id)}
        >
          {article.title}
        </a>
        <br></br>
        <a
          href={`#${article.id}`}
          title="Remove"
          onClick={onClickRemove.bind(null, article.id)}
        >
          X
        </a>
        <p style={{ display: article.display }}>{article.summary}</p>
      </li>
    );
  }
}
