class Car {
  constructor(make, model, year) {
      this._make = make;
      this._model = model;
      this._year = year;
  }

  get make() {
      return this._make;
  }

  set make(newMake) {
      this._make = newMake;
  }

  get model() {
      return this._model;
  }

  set model(newModel) {
      this._model = newModel;
  }

  get year() {
      return this._year;
  }

  set year(newYear) {
      this._year = newYear;
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
car1.year = "2024";
car2.year = "2023";
car3.year = 2025;

console.log(car1.year);  
console.log(car2.year);  
console.log(car3.year);  