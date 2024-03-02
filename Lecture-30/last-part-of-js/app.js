// const person = {
//   first: "samarth",
//   last: "vohra",
// };
// console.log(person);

// person.age = 21;
// console.log(person);

// delete person.last;
// console.log(person);

// -----------------------

// freezeing

// let obj = {
//   a: 10,
//   b: "bhaukaal",
// };

// Object.freeze(obj);

// console.log(obj);
// obj.age = 21;
// delete obj.a;
// console.log(obj);

// ------------------------

// let arr1 = [10, 20, 30];

// let arr2 = [30, 40, 50, 60];
// // concat (older)
// let ans = arr1.concat(arr2);
// console.log(ans);

// ------ newer way -> ...spreadoperator
// case-1 -> arrays
// let arr1 = [10, 20, 30];

// let arr2 = [30, 40, 50, 60];

// // let nums = [...arr1, 30, 40, 50, 60];
// let nums = [...arr1, ...arr2];
// console.log(nums);

// ----

// case-2 -> objects

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let obj2 = {
//   ...obj,
//   d: 40,
// };

// console.log(obj);
// console.log(obj2);

// ------------------

// rest parameter

// function sam(a, b, c) {
//   console.log(a, b, c);
// }

// sam(10, 20, 30, 40, 50, 60);

// ------

// function sam(a, b, c, ...num) {
//   //paramteres
//   console.log(num);
//   console.log(arguments);
//   console.log(a, b, c);
// }

// sam(10, 20, 30, 40, 50, 60, 70); //arguments

// ------------------
// destructuring (vvvimp)

// let fruits = ["mango", "pineapple", "cheeku", "cherry", "peach", "grapes"];

// // console.log(fruits[0], fruits[1], fruits[2]);

// // modern way -> array destructuring
// let [lallulaal, badakamaal, third, fourth, fifth, sixth] = fruits;

// console.log(lallulaal, badakamaal, third, fourth, fifth, sixth);

// let fruits = ["mango", "pineapple", "cheeku"];

// let [lallulaal, badakamaal, third, fourth, fifth] = fruits;

// let [lallulaal, badakamaal, third, fourth = "banana", fifth = "kiwi"]= fruits;

// ------

let fruits = ["mango", "pineapple", "cheeku", "banana", "alphanso"];

// let [lallulaal, badakamaal , , fourth, fifth] = fruits;
// let [lallulaal, badakamaal, fourth, fifth] = fruits;

// let [
//   lallulaal,
//   badakamaal,
//   third = "chukundar",
//   fourth = "banana",
//   fifth = "kiwi",
// ] = fruits;

// console.log(lallulaal, badakamaal, fourth, fifth);

// ---------

// object destructuring

// let car = {
//   namee: "BM-babloo",
//   price: 100,
// };

// older way
// let a = car.name;
// let b = car.price;
// console.log(a, b);

// ------

// newer way - > object destructuring

// let { a, b } = car; //wrong
// let { namee, price } = car; //wrong

// console.log(a, b); //wrong
// console.log(namee, price); //right

// ----------------
// modern way -> production
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50,
};

let ans = obj.c;
console.log(ans);

// ------

// let [] = arrays
// let {} = objects

let { c } = obj;
console.log(c);
