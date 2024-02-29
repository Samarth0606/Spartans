// tvmaze api -> call -> data -> DOM -> style
// https://api.tvmaze.com/search/shows?q=girls
// https://api.tvmaze.com/search/shows?q=superman/batman/cricket (change)

let input = document.querySelector("input");

let btn = document.querySelector("button");

let list = document.getElementById("list");

btn.addEventListener("click", function () {
  let searchText = input.value;

  let data = fetchData(searchText); //calling
  //   console.log(data); //undef
  input.value = "";
});

// to call api
function fetchData(searchText) {
  //paramter
  axios
    .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function (response) {
      //   console.log(response.data);
      manipulateDom(response.data);
    })
    .catch(function (err) {
      console.log("ooops...", err);
    });
}

// to manipulate the dom
function manipulateDom(datas) {
  while (list.firstChild) {
    list.firstChild.remove();
  }
  for (let data of datas) {
    // console.log(data);
    let figure = document.createElement("figure");

    if (data.show.image) {
      figure.innerHTML = `
            <img src=${data.show.image.medium} >
            <br>
            <h2>${data.show.language}</h2>
            <br>
            <h2>${data.show.name}</h2>
        `;
      list.appendChild(figure);
    }
  }
}
