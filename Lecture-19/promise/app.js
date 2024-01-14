


// let p =  new Promise()


// let p =  new Promise( function(resolve , reject){

//     // resolve()
//     // reject()
// } )

// ---------------------

// let p =  new Promise( function(resolve , reject){
//     let data = '10 rupee';
//     resolve(data)
// } )

// // console.log(p)

// // p.then().catch() //syntax

// p
// .then(function(d){
//     console.log(d)
// })
// .catch(function(err){
//     console.log(err)
// })


// ------------------------


let p =  new Promise( function(resolve , reject){
    let data = '10 rupee';
    let error = 'mai nhi dunga 10 rupee'
    resolve(data) //jo pehle aaya
    reject(error)

} )

// console.log(p)

// p.then().catch() //syntax

p
.then(function(d){
    console.log(d)
})
.catch(function(err){
    console.log(err)
})


