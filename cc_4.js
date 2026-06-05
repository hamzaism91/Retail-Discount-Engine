let inventory = [
  { name: "Laptop", category: "electronics", price: 800, inventoryCount: 5 },
  { name: "T-Shirt", category: "apparel", price: 20, inventoryCount: 25 },
  { name: "Apples", category: "groceries", price: 3, inventoryCount: 50 },
  { name: "Blender", category: "household", price: 60, inventoryCount: 20 },
  { name: "Book", category: "Books", price: 15, inventoryCount: 50 }
];

console.log("Initial Inventory:", inventory);

let customerType = "student";

for (let product of inventory) {
  let categoryDiscount = 0;

  switch (product.category) {
    case "electronics":
      categoryDiscount = 0.20;
      break;
    case "apparel":
      categoryDiscount = 0.15;
      break; 
    case "groceries":
      categoryDiscount = 0.10;
      break;
    case "household":
      categoryDiscount = 0.10;
      break;
    default:
      categoryDiscount = 0.00;
      break;
}

let baseDiscountedPrice = product.price * (1 - categoryDiscount);

let additionalDiscount = 0;
if (customerType === "student") {
  additionalDiscount = 0.05;
} else if (customerType === "senior") {
  additionalDiscount = 0.07;
} else {
  additionalDiscount = 0.00;
}

product.price = baseDiscountedPrice * (1 - additionalDiscount);
}

console.log("\n- Simulation of 3 Customer Checkouts -");

let customerCount = 1;
while (customerCount <= 3) {
  let cartTotal = 0;

  for (let product of inventory) {
    if (product.inventoryCount > 0) {
      cartTotal += product.price;
      product.inventoryCount -= 1;
    }
  }

  console.log(`Customer #${customerCount} Total Cost: $${cartTotal.toFixed(2)}`);
  customerCount++;
}

console.log("\n - Value After Discount -");
let singleProduct = inventory[0];
for (let key in singleProduct) {
  console.log(`${key}: ${singleProduct[key]}`);
}

console.log("\n- Final Product Status After Inventory Cycle -");

for (let product of inventory) {
  console.log(`Product Entry:`);
  for (let [key, value] of Object.entries(product)) {
    console.log(` ${key}: ${value}`);
  }
  console.log("--------------");
}
