const express = require("express"); //fn
// console.log(express);
let app = express(); //entire instance of your application  -> //obj
// console.log(app);

app.use(function (req, res) {
  //   console.log(req, "req");
  //   console.log(res, "res");
  res.send("request from middleware agyi");
});

// app.listen(PORT , function(){})
app.listen(8080, function () {
  console.log("server connected at port 8080");
});
