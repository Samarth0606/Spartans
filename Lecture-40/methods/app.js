const express = require("express"); //fn
const app = express(); //obj

// ----------------------
// methods
// app.get("/", (req, res) => {
//   console.log("request bhejdi bhaiya");
//   res.send("<h1>res bhi bhej dia white screen par dekho</h1>");
// });

// middleware (string)
// app.use("/dog", (req, res) => {
//   res.send("<h1>mai middle - /dog par aaya hu</h1>");
// });

// app.use("/dog/cat", (req, res) => {
//   res.send("<h2>mai middle - /dog/cat par aaya hu</h2>");
// });
// ----------------------

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>/ path hu mai</h1>");
});

app.get("/dog", (req, res) => {
  res.send("<h1>/dog path hu mai</h1>");
});
app.get("/dog/cat", (req, res) => {
  res.send("<h1>/dog/cat path hu mai</h1>");
});

app.get("*", (req, res) => {
  res.send("page not found plz enter a valid route");
});

// app.use("/", (req, res) => {
//   res.send("page not found plz enter a valid route");
// });

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Server connected at port ${PORT}`);
});
