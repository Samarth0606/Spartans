console.log(process.argv);
// console.log(process.argv.slice(2));
// console.log(process.argv[2]);
// console.log(process.argv.pop());
console.log(process.argv.slice(2));
let arrr = process.argv.slice(2);

for (let item of arrr) {
  console.log(`hello bhai jaan maksad nhi bhoolna ${item}`);
}
