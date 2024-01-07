
//fucntional expression
// function person(){

// }

// let person1 = person();

// console.log(person1); //undef.


// -------------------
//constructor function -> object create
// function person(){

// }

// let person1 = new person();

// console.log(person1);

// --------------------

//this
// function user(){ //ormal function

// }
// function Person(naam , umar){
//     // this.firstName = "Anshul";
//     this.firstName = naam;
//     // this.age = 21
//     this.age = umar
// }

// // let person1 = new person();

// let person2 = new person('mukul' , 25);
// let person3 = new person('Vishal' , 27);

// // console.log(person1);
// console.log(person2);
// console.log(person3);


// -----------------------------
let sam={
    mentor:true
}
let arr = [10,20];

function User(naam ,favColor , passWord){
    this.naam = naam;
    this.favColor = favColor;
    this.passWord = passWord;
    // this.bark = function(){console.log("mai nhi bhaukta jaa jo krna krle")}
}

User.prototype.bark = function(){
    return ("mai nhi bhaukta jaa jo krna krle")
}

let dog1 = new User('maverick' , 'red' , 'bhau bhau');
let dog2 = new User('bruno' , 'black' , 'meeow');
console.log(dog1)
console.log(dog2)
// dog1.bark();

