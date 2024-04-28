const mongoose = require("mongoose");
const Product = require("./model/Product");

let dummyArray = [
  {
    name: "Potato",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww",
    price: 54,
    desc: "na hi subha se bika hai koi aalu na koi aadha kandha",
  },
  {
    name: "Onion",
    img: "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25pb258ZW58MHx8MHx8fDA%3D",
    price: 100,
    desc: "aaisa pyaaj aap bhi khaiye ghar vaalo ko bhi khilaiye",
  },
  {
    name: "Tomato",
    img: "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvfGVufDB8fDB8fHww",
    price: 12,
    desc: "laal hai poora thela laal hai",
  },
  {
    name: "Paneer",
    img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dGFnZSUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 440,
    desc: "itni itni thailio mei sunaar ke paas bikega",
  },
  {
    name: "Cucumber",
    img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
    price: 60,
    desc: "lamba hai ri madam lamba teri jaan kasam re lamba",
  },
  {
    name: "Cherry",
    img: "https://images.unsplash.com/photo-1439127989242-c3749a012eac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlcnJ5fGVufDB8fDB8fHww",
    price: 140,
    desc: "maal hai pevar, bhabhi khaae ya devar",
  },
  {
    name: "Dragon fruit",
    img: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJhZ29uJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    price: 12,
    desc: "tera ghar isme jaenga",
  },
];

async function seedDB() {
  await Product.insertMany(dummyArray);
  console.log("DB SEEDED");
}

module.exports = seedDB;
