let student = {
  name: "Nicol",
  age: 15,
  marks: [11, 11, 12],
};
console.log(student.name);

let chevy = {
  make: "Chevrolet",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  mileage: 1021,
  needsWashing: true,
  fuel: 0,
  started: false,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    // метод drive
    if (this.started) {
      alert("Біп!");
    } else {
      alert("Спочатку запустіть двигун!");
    }
  },
  show: function () {
    alert(this.make);
  },
  addFuel: function (amount) {
    this.fuel += amount;
  },
  showFuel: function () {
    alert("У меня в баку " + this.fuel + " литрів бензину!");
  },
  toString: function() {
    return 'Автомобіль ' + this.make;
  }
};

console.log(chevy);
// for (let prop in chevy) {
//     console.log(chevy[prop]);
// }

chevy.drive();
chevy.start();
chevy.drive();
chevy.show();
chevy.showFuel();
chevy.addFuel(5);
chevy.showFuel();

alert(chevy);
document.write(chevy);
console.log(chevy);