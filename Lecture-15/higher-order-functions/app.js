
//def 1 eg:

// function outer(koiBhiNaam){ //para
//     console.log("hi i am inside an outer fun");
//     koiBhiNaam();
// }
 
//why are functions called first class citizes?
// what are first class functions
// let doosra = function inner(){
//     console.log("hey i am inside an inner fun")
// }


//HOF

// outer(doosra); //arg
// outer(function inner(){
//     console.log("hey i am inside an inner fun")
// }); //arg

// -------------------------------

// def 2 eg:

//hof
// function outer(){

//     // function inner(){
//     //     console.log("inside inner")
//     // }

//     // return inner
//     return function inner(){
//         console.log("inside inner")
//     }

// }



// ------------callback functions-----------------------


function outer(koiBhiNaam){ //hof
    console.log("hi i am inside an outer fun");
    koiBhiNaam(); //compulsory
}
 

let iner = function inner(){
    console.log("hey i am inside an inner fun")
}


outer(iner); 





