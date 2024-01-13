
// 1. fuctional invokation -> window
// function sam(){
//     console.log(this);
// }

// sam();


// ------------


// 2. method invokation -> this keyword depends on the obj inside which the method is dec/calledsam(5,4)

// let obj = {
//     a:10,
//     b:20,
//     fn:function(){
//         console.log(this)
//     }
// }


// obj.fn();
// let bro = obj.fn;
// bro();


// ------------------

// let obj = {
//     a : 10,
//     fn : function(){
//         function sam(){
//             console.log(this);
//         }
//         sam();
//     }

// }

// obj.fn();

// --------------------

// 3. constructor invoktion -> this always depends on the ewly created object

// function fun(){
//     console.log(this)
// }

// let fun1 = new fun();



// --------------------
// 4. indirect invokation -> call , apply , bind

// let obj1 = {
//     a : 100,
//     fn : function(aa , bb , cc){
//         console.log(this , aa , bb , cc)
//     }
// }

// let obj2 = {
//     a: 20
// }


// obj1.fn(10 , 20 , 30)

// obj2.fn(100,200,300) //wrong
// ------------ 

// 1/2. call , apply -> polymorphism
// obj1.fn.call(obj2 , 100 , 200 ,300) //context to this
// obj1.fn.apply(obj2 ,[100 , 200 , 300]) //context to this


// 3.bind
// function fun(){
//     console.log(this)
// }
// fun()
// let f4 = function{
//     console.log(this)
// }
// let f4 = fun.bind(100); //run ❌
// f4()// run ✅


// -------------------------------------
// 5. arrow function -> always depends on parent ka this

// let obj1 = {
//     a : 10,
//     fn :  function(){
//         console.log(this)
//     }
// }

// let obj = {
//     a : 10,
//     fn :  ()=>{
//         console.log(this)
//     }
// }

// let obj = {
//     a : 10,
//     fn :  ()=>{
//         let sam = ()=>{
//             console.log(this)
//         }
//         sam()
//     }
// }


let obj = {
    a : 10,
    fn :  function(){
        let sam = ()=>{
            console.log(this)
        }
        sam()
    }
}

obj.fn()