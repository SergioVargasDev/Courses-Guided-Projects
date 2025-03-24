class Car {
  constructor(brand, model, year, color) {
    (this.brand = brand),
      (this.model = model),
      (this.year = year),
      (this.color = color);
  }

  overview() {
    return `I have a ${this.brand} ${this.model} from ${this.year} and is ${this.color}`;
  }
}

myTxt = document.getElementById("myTxt");

const car1 = new Car("Lamborghini", "aventador", 2015, "white");
console.log(car1.overview());

myTxt.innerHTML = car1.overview();
