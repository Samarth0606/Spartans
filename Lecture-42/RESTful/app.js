const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

let commentsArray = [
  {
    id: 0,
    author: "mamdi",
    comments: "mera hindi grammer ka homework pagal hai tu",
  },
  {
    id: 1,
    author: "brother ewww",
    comments: "whats that  brother",
  },
  {
    id: 2,
    author: "satvik",
    comments: "class ajaya kro",
  },
  {
    id: 3,
    author: "priyanshu",
    comments: "cheating hori hai",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// body parsing middlewres
// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// root route
app.get("/", (req, res) => {
  res.send("bhaiya root route hit krdia ab mai kaam shuru kro");
});

// task-1 => display all the comments
app.get("/comments", (req, res) => {
  res.render("index", { commentsArray });
});

// task-2 => display form
app.get("/comment/new", (req, res) => {
  res.render("new");
});

//task-3 => actually add in DB/arrays
app.post("/comments", (req, res) => {
  //   console.log(req.body, "req.body");
  let { author, comments } = req.body;
  commentsArray.push({ id: commentsArray.length, author, comments });

  res.redirect("/comments");
});

//task-4 => show particular comment
app.get("/comments/:idd", (req, res) => {
  let { idd } = req.params;
  let foundComment = commentsArray.find(
    (everyComment) => parseInt(idd) === everyComment.id
  );
  res.render("show", { comment: foundComment });
});

//task-5 => edit form
app.get("/comments/:idd/edit", (req, res) => {
  let { idd } = req.params;
  let foundComment = commentsArray.find(
    (everyComment) => parseInt(idd) === everyComment.id
  );
  res.render("edit", { foundComment });
});

//task-6 => actually edit
app.patch("/comments/:idd", (req, res) => {
  let { idd } = req.params;
  let foundComment = commentsArray.find(
    (everyComment) => parseInt(idd) === everyComment.id
  );
  let { author, comments } = req.body;
  foundComment.author = author;
  foundComment.comments = comments;
  res.redirect(`/comments/${idd}`);
});

//task-7 => delete a comment
app.delete("/comments/:idd", (req, res) => {
  let { idd } = req.params;
  let newArr = commentsArray.filter(
    (everyComment) => parseInt(idd) !== everyComment.id
  );
  commentsArray = newArr;
  res.redirect("/comments");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server connected at port : ${PORT}`);
});
