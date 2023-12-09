/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpending = {};
  transactions.forEach(function (obj) {
    if(totalSpending[obj["category"]]){
      totalSpending[obj["category"]] += obj["price"];
    } else {
      totalSpending[obj["category"]] = obj["price"];
    }
  });

  let result = [];

  for(const key of Object.keys(totalSpending)){
    result.push({category: key, totalSpent: totalSpending[key]})
  }
  return result;
}


module.exports = calculateTotalSpentByCategory;
