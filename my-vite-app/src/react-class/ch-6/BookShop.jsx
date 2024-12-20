import React, { Component } from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i;
    i += 1;
  }
})();

export class BookShop extends Component {
  state = {
    articles: [
      {
        id: id.next(), //1
        title: "Article 1",
        summary: "Article 1 Summary",
        display: "none",
      },
      {
        id: id.next(), //2
        title: "Article 2",
        summary: "Article 2 Summary",
        display: "none",
      },
      {
        id: id.next(), //3
        title: "Article 3",
        summary: "Article 3 Summary",
        display: "none",
      },
      {
        id: id.next(), //4
        title: "Article 4",
        summary: "Article 4 Summary",
        display: "none",
      },
    ],
    title: "",
    summary: "",
  };

  onClickAdd = () => {
    this.setState((state) => ({
      articles: [
        ...state.articles,
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };

  onClickToggle = (id) => {
    this.setState((state) => {
      const articles = [...state.articles];
      const index = articles.findIndex((article) => article.id === id);
      articles[index] = {
        ...articles[index],
        display: articles[index].display ? "" : "none",
      };
      return { ...state, articles };
    });
  };

  onClickRemove = (id) => {
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((article) => article.id !== id),
    }));
  };

  render() {
    const { articles, summary, title } = this.state;

    return (
      <section>
        <header>
          <input
            placeholder="title"
            value={title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
          <br />
          <input
            placeholder="summary"
            value={summary}
            onChange={(event) => this.setState({ summary: event.target.value })}
          />
          <br />
          <button onClick={this.onClickAdd}>Add</button>
        </header>
        <article>
          {articles.map((value) => (
            <>
              <p
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "50%",
                  justifyContent: "space-between",
                }}
                key={value.id}
              >
                <a
                  //# error
                  href={`#${value.id}`}
                  title={value.title}
                  onClick={this.onClickToggle.bind(null, value.id)}
                >
                  {value.title}
                </a>
                <a
                  //# error
                  href={`#${value.id}`}
                  title={value.title}
                  onClick={this.onClickRemove.bind(null, value.id)}
                >
                  X
                </a>
              </p>
              <p style={{ display: `${value.display}` }}>{value.summary}</p>
            </>
          ))}
        </article>
      </section>
    );
  }
}

export default BookShop;
