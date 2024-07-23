class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Getter methods
  get make() {
    return this.make;
  }

  get model() {
    return this.model;
  }  

  get year() {
    return this.year;
  }

  // Setter methods
  set make(newMake) {
    this.make = newMake;
  }

  set model(newModel) {
    this.model = newModel;
  }

  set year(newYear) {
    this.year = newYear;
  }
}

// Instantiate multiple car objects
let car1 = new Car('Toyota', 'Camry', 2020);
let car2 = new Car('Honda', 'Civic', 2018);

// Demonstrate usage
console.log("Car 1:");
console.log("Make:", car1.getMake());
console.log("Model:", car1.getModel());
console.log("Year:", car1.getYear());

console.log("\nCar 2:");
console.log("Make:", car2.getMake());
console.log("Model:", car2.getModel());
console.log("Year:", car2.getYear());

// Changing properties using setters
car1.setYear(2022);
car2.setModel('Accord');

// Display updated information
console.log("\nUpdated Car 1 Year:", car1.getYear());
console.log("Updated Car 2 Model:", car2.getModel());
