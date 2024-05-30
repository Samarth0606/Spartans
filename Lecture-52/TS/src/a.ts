// const a = "sam";
// console.log(a)

// ------------------

// let a = 10 //inference -> observe krke inculcate

// let a:number = 10; 
// console.log(a);
// // a = "sm"; ❌
// a = 123; //✅
// console.log(a)

// ---------------------

// function greet(username:string){
//     console.log("hello " + username)
// }

// greet("samarth vohra")
// // greet(123) ❌
// // greet("123") ✅

// ----------------------

//return type func ke liye

// function sum(a:number,b:number) : number{
//     return a+b
// }
// // function sum(a:number,b:number){ //inference
// //     return "sam"
// // }
// console.log(sum(10,20))

// ------------------------

// 18+ => true / false

// function age(a:number) : boolean{
//     if(a>=18){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(age(19))
// console.log(age(10))

// ------------------------

//hof -> accept krle


// function SecBaad(fn : ()=>void){
// function SecBaad(fn : ()=>string){
//     setTimeout(()=>{
//         fn()
//     } , 1000)
// }

// function chalo(){
//     console.log("mai hu chalne vaala")
// }
// function chalo2(){
//     return "samarth"
// }

// // SecBaad(chalo)
// SecBaad(chalo2)


// ------------------------

    // function SecBaad(fn : ()=>void):number{
    //     setTimeout(()=>{
    //         fn()
    //     } , 1000)
    //     return 11;
    // }
    
    // function chalo(){
    //     console.log("mai hu chalne vaala")
    // }
    
    // SecBaad(chalo)

// -----------------------

// generic (es5)


// arrow (es6)

// let sam = ()=>{
//     console.log("bhai mai hu es6")
// }

// sam()

// --------------
function sam(vaal){
     console.log("hello");
     
}
sam(100)