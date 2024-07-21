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
  
  // Calculate total number of products sold
  let totalSold = 0;
  for (let i = 0; i < jsonData.prod.length; i++) {
    totalSold += jsonData.prod[i].sold;
  }
  

  
  // Find the product that sold the most
  let maxSold = 0;
  let bestSellingProduct = 0;
  
  for (let i = 0; i < jsonData.prod.length; i++) {
    if (jsonData.prod[i].sold > maxSold) {
      maxSold = jsonData.prod[i].sold;
      bestSellingProduct = jsonData.prod[i];
    }
  }
  
  
  console.log("Total number of products sold");
  console.log(totalSold);
  console.log("Product that sold the most");
  console.log(bestSellingProduct);
  