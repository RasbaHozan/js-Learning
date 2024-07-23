class Car {
  constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  getMake() {
      return this.make;
  }

  setMake(newMake) {
      this.make = newMake;
  }

  getModel() {
      return this.model;
  }

  setModel(newModel) {
      this.model = newModel;
  }

  getYear() {
      return this.year;
  }

  setYear(newYear) {
      this.year = newYear;
  }
}

let myCar = new Car("Honda", "City", 2022);

console.log(myCar.make);  
console.log(myCar.model); 
console.log(myCar.year);  

// now Instantiate multiple Car objects
let car1 = new Car("Honda", "City", 2022);
let car2 = new Car("Toyota", "Corolla", 2023);
let car3 = new Car("Kia", "Sportage", 2024);

// Access properties
console.log(car1.make); 
console.log(car2.model); 
console.log(car3.year);  

// update year property
car2.year = "2024";
console.log(car2.year);

// update car
car1.make = "Honda";
car1.model= "Civic";
car1.year= 2024;

console.log(car1);