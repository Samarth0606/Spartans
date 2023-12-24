
// objects

// let person = {}

// let person = {
//     // properties -> key : value
//     naam : "krish" ,
//     age : 19 ,
//     isMale : true,
//     favColor : "blue" , 
// }

// console.log(person); //object

// // dot notation (.)
// console.log(person.favColor)
// console.log(person.isMale)
// console.log(person.naam)


// -------------------------------


// let dog = {
//     breed : "pitbull" , 
//     isTail : true , 
//     legs : 5 ,
//     color : "black"
// }


// // dot
// console.log(dog.breed);
// // square braces
// // console.log(dog[breed]) //wrong
// console.log(dog["breed"])


// ------------------------------

// let course = {
//     naam : "web dev" , 
//     isClassroom : true , 
//     // isOngoing : function padhai(){ //method -> object ke andar function
//     isOngoing : function(){ //method -> object ke andar function
//         console.log("haan class abhi chal rhi hai")
//     }
// }


// // console.log(course);

// // console.log(course.naam);
// // console.log(course.isClassroom);
// // console.log(course.isOngoing); //function def.
// console.log(course.isOngoing()); //function 

// console.log(course.padhai()); 


// -------------------------

// let course = {
//     naam : "web dev" , 
//     isClassroom : true , 
//     isOngoing : function(){ 
//         // console.log("haan class abhi chal rhi hai")
//         return 'covid is back'
//     }
// }

// console.log(course.isOngoing()); 


// -----------------------

// let course = {
//     naam : "web dev" , 
//     isClassroom : true , 
//     isOngoing : function(){ 
//         // console.log(`haan ${course.naam} class abhi chal rhi hai`)
//         console.log(`haan ${this.naam} class abhi chal rhi hai`)
//     }
// }

// console.log(course.isOngoing()); 

// -------------------------

// function greeting(user){
//     console.log(`hi and welcome from ${user.naam} and pls ${user.wish}`)
// }

// let person = {
//     naam : "samarth vohra",
//     wish : "have a good day"
// }

// greeting(person);
// console.log(greeting(person))