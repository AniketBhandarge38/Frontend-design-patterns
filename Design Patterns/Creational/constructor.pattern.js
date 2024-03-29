// class Car {
//   constructor(model, year, miles) {
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
//   }

//   toString() {
//     console.log(`${this.model} has done ${this.miles}`);
//   }
// }

// const nano = new Car("nano", 2012, 30000);
// const city = new Car("city", 2022, 40000);

// nano.toString();

class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}

Car.prototype.toString = function () {
  console.log(`${this.model} has done ${this.miles}`);
};

const nano = new Car("nano", 2012, 30000);
const city = new Car("city", 2022, 40000);

city.toString();
