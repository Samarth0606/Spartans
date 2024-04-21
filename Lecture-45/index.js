function Sam() {
  this.naam = "sam";
  this.age = 28;
  this.favColor = "black";
}
let p1 = new Sam(); //objects

console.log(p1);

// --------------------------

class Sam2 {
  constructor() {
    this.naam = "sam";
    this.age = 28;
    this.favColor = "black";
  }
}

let p2 = new Sam2();
console.log(p2);
