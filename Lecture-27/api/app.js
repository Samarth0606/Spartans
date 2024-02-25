// https://api.tvmaze.com/search/shows?q=girls

// 1. XMLHtppRequest -> constructor

// let req = new XMLHttpRequest();
// console.log(req);
// req.open("GET", "https://api.tvmaze.com/search/shows?q=girls");

// req.send();

// console.log(req);

// req.onerror = function (response) {
//   console.log(response, "error");
// };
// req.onload = function (response) {
//   //   console.log(response, "sam1");
//   console.log(this.response, "sam2");
// };

// console.log(req);

// ----------------------------------

// 2. fetch -> web api
// fetch returns a Promise
// JSON also returns a promise
// by defult method of fetch is GET

// fetch("https://api.tvmaze.com/search/shows?q=girls")
//   .then(function (res) {
//     // console.log(res);
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data, "poora");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// fetch("https://api.tvmaze.com/search/shows?q=girls")
//   .then(async function (res) {
//     // console.log(res);
//     let data = await res.json();
//     console.log(data, "final");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ----------------------------------
// 3. axios - 3rd party
// axios also returs a promise

axios
  .get("https://api.tvmaze.com/search/shows?q=girls")
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });
