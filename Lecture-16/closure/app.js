

// function fun(){
//     let baba = "bhaukaali";

//     function innerFun(){
//         console.log(baba)
//     }

//     innerFun();
// }

// fun()



// ------------------------



// hof
// let sam = 10;

// function fun(){
//     let baba = "bhaukaali";

//     function innerFun(){
//         console.log(baba)
//     }

//     return innerFun;
// }
// // console.log(baba) //direct axcc

// let returnedValue = fun();

// returnedValue();


// ----------------


// function f1(){
//     let sam = 1000;
//     function f2(){
//         function f3(){
//             console.log(sam)
//         }
//         return f3
//     }
//     let ans = f2();
//     return ans;
// }
// let returnedValue = f1();

// returnedValue();

// ------------------------------



function couter(){
    let count = 0;
    return {
        getValue : function(){
            console.log(count)
        },
        increment : function(){
            count+=1;
        },
        decrement : function(){
            count-=1;
        },
        reset : function(){
            count = 0;
        }
    }
}

let counter1 = couter();
console.log(counter1);

counter1.getValue();
counter1.increment();
counter1.increment();
counter1.getValue();
counter1.decrement();
counter1.getValue();
counter1.increment();
counter1.increment();
counter1.reset();
counter1.getValue();


// console.log(count) //error






