const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({
  partialsDir: path.join(__dirname, "views/partials"),
  helpers,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/homeRoutes"));

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
