let n = process.argv.pop();

// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// way-2

let cnt3 = 1;
let cnt5 = 1;

for (let i = 1; i <= n; i++) {
  let str = "";
  if (cnt3 == 3) {
    str += "fizz";
    cnt3 = 0;
  }
  if (cnt5 == 5) {
    str += "buzz";
    cnt5 = 0;
  }
  if (str == "") {
    str += i;
  }
  cnt3++;
  cnt5++;
  console.log(str);
}
