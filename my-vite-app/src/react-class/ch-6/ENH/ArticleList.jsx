import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

export default class ArticleList extends Component {
  render() {
    const { article, onClickToggle, onClickRemove } = this.props;


    // array[]
    return (
      <ul>
        {article.map((i) => (
          <ArticleItem
            key={i.id}
            article={i}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    );
  }
}
