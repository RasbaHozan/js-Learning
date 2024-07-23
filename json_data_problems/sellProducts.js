let jsonData = {
    "prod": [
      { "name": "one", "sold": 52 },
      { "name": "two", "sold": 12 },
      { "name": "three", "sold": 3 },
      { "name": "four", "sold": 1 },
      { "name": "five", "sold": 47 },
      { "name": "six", "sold": 5 }
    ]
  };
  
  // Function to calculate total number of products sold
  function totalSold(products) {
    let totalSold = 0;
    for (let i = 0; i < products.length; i++) {
      totalSold += products[i].sold;
    }
    return totalSold;
  }
  
  // Function to find the product that sold the most
  function bestSellingProduct(products) {
    let maxSold = 0;
    let bestSellingProd = null;
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].sold > maxSold) {
        maxSold = products[i].sold;
        bestSellingProd = products[i];
      }
    }
    return bestSellingProd;
  }
  
  let totalProductsSold = totalSold(jsonData.prod);
  console.log("Total number of products sold");
  console.log(totalProductsSold);
  
  let bestProduct = bestSellingProduct(jsonData.prod);
  console.log("Product that sold the most");
  console.log(bestProduct);
  