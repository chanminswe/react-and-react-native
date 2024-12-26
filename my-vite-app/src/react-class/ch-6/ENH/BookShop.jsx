import React, { Component } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export default class Bookshop extends Component {
  state = {
    article: [
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
      {
        id: id.next(),
        title: "Article 4",
        summary: "Article 4 Summary",
        display: "none",
      },
    ],
    title: "",
    summary: "",
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };

  onClickAdd = () => {
    this.setState((state) => ({
      article: [
        ...state.article,
        {
          id: id.next(),
          title: this.state.title,
          summary: this.state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };

  onClickToggle = (id) => {
    this.setState((state) => {
      const article = [...state.article];
      const index = article.findIndex((article) => article.id === id);
      article[index] = {
        ...article.index,
        display: article.index.display ? "" : "none",
      };
      return { ...state, article };
    });
  };

  onClickRemove = (id) => {
    this.setState((state) => ({
      ...this.state,
      article: this.state.article.filter((article) => article.id !== id),
    }));
  };

  render() {
    const { article, summary, title } = this.state;

    return (
      <section>
        <AddArticle
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={this.onChangeTitle}
          onChangeSummary={this.onChangeSummary}
          onClickAdd={this.onClickAdd}
        />
        <ArticleList
          article={[
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
            {
              id: id.next(),
              title: "Article 4",
              summary: "Article 4 Summary",
              display: "none",
            },
          ]}
          onClickToggle={this.onClickToggle}
          onClickRemove={this.onClickRemove}
        />
      </section>
    );
  }
}
