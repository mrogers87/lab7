var shoppingList = [
  "Cherries: $2.99", "Cereal: $3.99", "Milk: $2.49"
];
for (var i = 0; i <shoppingList.length; i++) {
  console.log(shoppingList[i]);
}
var total = [2.99,3.99,2.49];
var indexValue = total.length;
var totalSum = 0;
for(var x = 0; x <indexValue; x++){
    totalSum += total[x];
}
console.log("Total: $"+totalSum);
