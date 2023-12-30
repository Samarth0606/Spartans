
let c = "samarth vohra";

var d = "kashish vohra";

function outer(){
    console.log(d);
    function inner(){
        console.log(c)
    }
    inner();
}

outer();


// ---------------------------
// scoping

// var a = 10;
// console.log(a);

// function fab(){
//     var a = 100;
//     console.log(a);
// }

// fab();
// console.log(a);

















