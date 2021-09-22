const express = require("express");
const app = express();
const port = 3000;

let num = 99;
app.get("/", (req, res) => {
  res.send(
    `<a href="http://localhost:3000/99">99 Bottles of beer on the wall </a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  num = --num;
  if (num === 0) {
    num = 99;
    res.send(` <a href="http://localhost:3000/">Start Over<a>`);
  }
  res.send(
    ` <a href="http://localhost:3000/:${num}">${num} Bottles of beer on the wall <a>`
  );
});

app.listen(port, () => {
  console.log("listening on port", port);
});
