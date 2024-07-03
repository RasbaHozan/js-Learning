let ridesFaresEarned =[20,50,30,34,12];

//Calculate total earnings
function calculateTotalEarnings(ridesFaresEarned) {
    let totalEarnings= 0;
    let len= ridesFaresEarned.length;
    for (let i =0 ; i < len ;i++) {
     totalEarnings += ridesFaresEarned[i] * 0.5;
    }
    return totalEarnings;
}

// Calculate total fuel cost
function totalFuelCost(ridesFaresEarned) { 
    let totalFuelCost = 0;
    let len = ridesFaresEarned.length;
    for (let i = 0; i < len; i++) {
        totalFuelCost += ridesFaresEarned[i] * 0.20 ;
    }
    return totalFuelCost;
}

// Calculate net earning

function netEarnings(ridesFaresEarned) {
    let netEarnings =0 ;
    let len = ridesFaresEarned.length;
    for (let i = 0; i < len; i++) { 

        let totalEarnings = ridesFaresEarned[i] * 0.5 ;
        let totalFuelCost = ridesFaresEarned[i] * 0.20 ;
    
        netEarnings += totalEarnings - totalFuelCost ;
    }
    return netEarnings;
}

// find average fare amount for the day
function averageFare(ridesFaresEarned) {
    let averageFare = 0;
    let len = ridesFaresEarned.length;
    for (let i = 0; i < len; i++) {
        averageFare += ridesFaresEarned[i] / len;
    }
    return averageFare;
}



//Calculate highest fare during the day
function highestFare(ridesFaresEarned) {
    let highestFare = 0;
    let len = ridesFaresEarned.length;
    for (let i = 0; i < len; i++) {
        if (highestFare < ridesFaresEarned[i]) {
            highestFare = ridesFaresEarned[i];
        }
    }
    return highestFare;
}


//sort the fares in ascending order
function sortFares(ridesFaresEarned) {
    let len = ridesFaresEarned.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (ridesFaresEarned[j] > ridesFaresEarned[j + 1]) {
                // Swap elements
                let temp = ridesFaresEarned[j];
                ridesFaresEarned[j] = ridesFaresEarned[j + 1];
                ridesFaresEarned[j + 1] = temp;
            }
        }
    }

    return ridesFaresEarned;
}

let rideFaresEarned = [20,50,30,34,12];

//calculate the total number of miles that driver drove in a day. 

function totalMilesDriven(rideFaresEarned) {
    let totalMiles = 0;
    for (let i = 0; i < rideFaresEarned.length; i++) {
        totalMiles += rideFaresEarned[i];
    }
    return totalMiles / 2; 
}


// filter and display fares above a certain threshold

function filterFaresAboveThreshold(rideFaresEarned) {
    let threshold = 34;
    let filteredFares = [];
    let filteredIndex = 0;
    let len = rideFaresEarned.length;
    for (let i = 0; i < len; i++) {
        if (rideFaresEarned[i] > threshold) {
            filteredFares[filteredIndex++] = rideFaresEarned[i];
        }
    }
    return filteredFares;
}




//remove duplicate fares
function removeDuplicateFares(rideFaresEarned) {
    let uniqueFares = [];
    let uniqueIndex = 0;
 //check fare is in ridesFaresEarned
    for (let i = 0; i < rideFaresEarned.length; i++) {
        let fare = rideFaresEarned[i];
         duplicateFare = false;

         //check fare is in uniqueFares
        for (let j = 0; j < uniqueFares.length; j++) {
            if (fare == uniqueFares[j] ) {
                duplicateFare = true;
            }
        }
        // If fare is not a duplicate, add it to uniqueFares
        if (duplicateFare == false) {
       uniqueFares[uniqueIndex] = fare ;
            uniqueIndex++;
        }
    }

    return uniqueFares;
}



//display the day's fare collection in reverse order
function displayFaresInReverseOrder(rideFaresEarned) {
    let reversedFares = [];
    let len=rideFaresEarned.length;
    for (let i = len - 1; i >= 0; i--) {
        reversedFares[len- 1 - i] = rideFaresEarned[i];
    }
    return reversedFares;
}


//find the difference between consecutive fare amounts and display the result. Return the highest fare difference. 

function findConsecutiveFareDifferences(rideFaresEarned) {
    let maxDifference = 0;

    for (let i = 1; i < rideFaresEarned.length; i++) {
        let fare1 = rideFaresEarned[i];
        let fare2 = rideFaresEarned[i - 1];
        
        let difference = fare1 - fare2;
        if (difference > maxDifference) {
            maxDifference = difference;
        }
    }

    return maxDifference;
}

console.log(calculateTotalEarnings(ridesFaresEarned))
console.log(totalFuelCost(ridesFaresEarned))
console.log(netEarnings(ridesFaresEarned))
console.log(averageFare(ridesFaresEarned))
console.log(highestFare(ridesFaresEarned))
console.log(sortFares(ridesFaresEarned))
console.log(totalMilesDriven(rideFaresEarned))
console.log(filterFaresAboveThreshold(rideFaresEarned))
console.log(removeDuplicateFares(rideFaresEarned))
console.log(displayFaresInReverseOrder(rideFaresEarned))
console.log(findConsecutiveFareDifferences(rideFaresEarned))