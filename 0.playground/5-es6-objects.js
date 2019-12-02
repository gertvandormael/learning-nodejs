// Object property shorthand

const name = "Gert"

const userAge = 29

const user = {
  name,
  age: userAge,
  location: "Hasselt"
}

// Object destructuring

const product = {
  label: "Red note book",
  price: 3,
  stock: 201,
  salePrice: undefined
}

const {label:productLabel, price, stock, rating = 5 } = product;

// console.log(label);
console.log(productLabel);
console.log(rating);



const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction("order", product)