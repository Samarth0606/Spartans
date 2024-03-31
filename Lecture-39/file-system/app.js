const fs = require("fs");
// console.log(fs);

let data = "hi mera naam mukesh hai aur dhumrpaan sahet ke liye hanikarak hai";
//create
// fs.writeFile('abc.txt' , data , {} , function(){})
// fs.writeFile(
//   "def.txt",
//   data,
//   {
//     // encoding: "utf-8",
//     // flag: "w",
//   },
//   function (err) {
//     if (err) {
//       throw err;
//     }
//     console.log("file written successfully");
//   }
// );

// read
// fs.readFile(
//   "abc.txt",
//   {
//     // encoding: "utf-8", //default -> null
//   },
//   function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data.toString(), "sam");
//   }
// );

//update
// let updateData = "mai mukesh ki biwi hu mat kro dhumrapaan plggggg";
// fs.appendFile("abc.txt", updateData, {}, function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("data updated bhabhi ji");
// });

//delete
// fs.unlink("abc.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("delete hogya");
// });
