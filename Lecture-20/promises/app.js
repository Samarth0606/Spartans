// let p = new Promise(cb)

let p = new Promise(function (resolve, reject) {
  let data = "hello from api";
  let error = "nhi kar rha poora";
  resolve(data);
  // reject(error);
});

// p.then(function(data){

// })
// .catch(function(err){

// })

// -----------------------------------
