let step1 = function () {
  return new Promise(function (resolve, reject) {
    console.log("selecting image from gallery...");
    setTimeout(function () {
      resolve("selected image");
    }, 4 * 1000);
  });
};

let step2 = function () {
  return new Promise(function (resolve, reject) {
    console.log("please wait finding filter...");
    setTimeout(function () {
      resolve("filter applied");
    }, 2 * 1000);
  });
};

let step3 = function () {
  return new Promise(function (resolve, reject) {
    console.log("adding caption please wait...");
    setTimeout(function () {
      resolve("caption added");
      //   reject("caption added"); //try this
    }, 5 * 1000);
  });
};

let step4 = function () {
  return new Promise(function (resolve, reject) {
    console.log("uploading image please wait...");
    setTimeout(function () {
      resolve("image uploaded");
    }, 3 * 1000);
  });
};
//way-1
// step1().then(function (image) {
//   console.log(image);
//   step2().then(function (filter) {
//     console.log(filter);
//     step3().then(function (caption) {
//       console.log(caption);
//       step4().then(function (upload) {
//         console.log(upload);
//       });
//     });
//   });
// });

//way-2
step1()
  .then(function (image) {
    console.log(image);
    return step2();
  })
  .then(function (filter) {
    console.log(filter);
    return step3();
  })
  .then(function (caption) {
    console.log(caption);
    return step4();
  })
  .then(function (upload) {
    console.log(upload);
  })
  .catch(function () {
    console.log("something went wrong");
  });
