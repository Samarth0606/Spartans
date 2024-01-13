


// function Person1(myName , myColor , myAge){
//     this.naam = myName;
//     this.rang = myColor;
//     this.umar = myAge;
//     // this.bhasha = function(){
//     //     console.log("ye meri bhasha hai , hindi")
//     // }
// }

// Person1.prototype.bhasha  =  function(){
//                                 console.log("ye meri bhasha hai , hindi")
//                             }

// Person1.prototype.boli   =   function(){
//                                 return("ye meri boli hai , english")
//                             }

// let person1 = new Person1("samarth" , "black" , 28);
// let person2 = new Person1("tanish" , "blue" , 27);

// console.log(person1)
// console.log(person2)

// ----------------------------------------------------


// class Person{
//     constructor(myName , myColor , myAge){
//         this.naam = myName;
//         this.rang = myColor;
//         this.umar = myAge;
//     }
//     bhasha() {
//         return `ye hai meri bhasha hindi , mai hu ${this.naam}`
//     }
// }

// let person3 = new Person("samarth" , "black" , 28);
// let person4 = new Person("tanish" , "blue" , 27);

// not to be done
// class Student{
//     constructor(myName , myColor , myAge){
//         this.naam = myName;
//         this.rang = myColor;
//         this.umar = myAge;
//     }
//     bhasha() {
//         return `ye hai meri bhasha hindi , mai hu ${this.naam}`
//     }
// }

// ----------------------------------
// sceario-1 (same properties)
// class Student extends Person{

// }

// scenario-1
// let student1 = new Student("yash" , "pink" , 22);
// let student2 = new Student("vishal" , "green" , 27);
// ----------------------------------

// ----------------------------------
// scenario-2 (some extra properties required)
// class Student extends Person{
//     constructor(myName , myColor , myAge , groupNo){
//         super(myName , myColor , myAge)
//         this.no = groupNo
//     }
// }
// ----------------------------------

// scenario-2
// let student3 = new Student("yash" , "pink" , 22 , 'A');
// let student4 = new Student("vishal" , "green" , 27 , 'C');
// ----------------------------------

// ----------------------------------
// scenario-3 (some less properties required)
// class Student extends Person{
//     constructor(myName , myColor , groupNo){
//         super(myName , myColor)
//         this.no = groupNo
//     }
// }

// // scenario-3
// let student5 = new Student("yash" , "pink" , 'A');
// let student6 = new Student("vishal" , "green" , 'C');

// ----------------------------------

// ----------------------------------
// scenario-4 (some less properties required)
// class Student extends Person{
//     constructor(myName , myColor , myAge , groupNo){
//         super(myName , myColor , myAge)
//         this.no = groupNo
//     }
//     bhasha() {
//         return `ye hai meri bhasha english , meri umar hai ${this.umar}`
//     }
// }
// // // scenario-4
// let student7 = new Student("yash" , "pink" , 110 , 'A');
// let student8 = new Student("vishal" , "green" , 120 , 'C');
// ----------------------------------