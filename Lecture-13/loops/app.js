


// let arr = ['sam' , 'vohra' , 'satvik' , 'tanmay' , 'yash'];

// for(let item = 0 ; item < arr.length ; item ++){
//     console.log(arr[item])
// }


// ------------------------


let arr = ['sam' , 'vohra' , 'satvik' , 'tanmay' , 'yash']; //for-of

let person = { //for-in
    naam : 'vijay deenanath chauhan',
    baapKaNaam : 'bada chauhan',
    kaam : 'CTO'
}

//for
// for(let item = 0 ; item < arr.length ; item ++){
//     console.log(arr[item])
// }

//for-of
// for(let item of arr){
//     console.log(item)
// }

// console.log(person.naam);

for(let item in person){
    console.log(item)
    // console.log(person.item)
    console.log(person[item])
}
