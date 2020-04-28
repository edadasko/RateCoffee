class Storage {
  constructor() {
    this.coffees = [];
  }

  addCoffee(coffee) {
    if (this.coffees.length == 0) {
      coffee.id = 1;
    }
    else {
      coffee.id = this.coffees.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
    }
    this.coffees.push(coffee);
  }
}


let coffeeStorage = new Storage();

let coffee1 = new Coffee('cappuccino', 'admin', 300,
  "An espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam",
  [
    new Ingredient("milk-foam", 30),
    new Ingredient("milk", 30),
    new Ingredient("espresso", 30),
])

coffee1.addMark(5);
coffee1.addMark(4);
coffee1.addComment(new Comment('qwerty', 'Test Comment'));

coffeeStorage.addCoffee(coffee1);
