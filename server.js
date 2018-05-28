const express = require("express");

const app = express();

const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials")


app.set("view engine", "hbs");

app.use(express.static("./public"));

app.get ("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    content: "Home page content"
  })
})

app.listen(3001)
