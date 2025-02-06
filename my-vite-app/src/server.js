const express = require("express");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./App").default;

const app = express();
const PORT = 4040;

const doc = (content) => `
<!doctype html>
<html>
<head>
<title>Rendering to strings</title>
</head>
<body>
<div id="app">${content}</div>
</body>
</html>
`;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const props = { items: ["One", "Two", "Three"] };
  const rendered = renderToString(React.createElement(App, props));
  res.send(doc(rendered));
});

app.listen(PORT, () => {
  console.log("Server is running ");
});
