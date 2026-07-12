import express from "express";
import nunjucks from "nunjucks";
import path from "path";

const app = express();

const PORT = 3000;

// Nunjucks setup
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

// Static files
app.use(express.static(path.join(process.cwd(), "public")));

// Home page
app.get("/", (req, res) => {
  res.render("index.njk");
});

// HTMX request
app.get("/hello", (req, res) => {
  res.render("partials/message.njk");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
