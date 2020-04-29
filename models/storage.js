var config = {
    apiKey: "AIzaSyDT0-ekaamyi8lkYzQ-nIT7xyGguuQW-R8",
    authDomain: "ratecoffeespa.firebaseapp.com",
    databaseURL: "https://ratecoffeespa.firebaseio.com"
  };

class Storage {
  constructor() {
    if (!firebase.apps.length) {
       firebase.initializeApp(config);
    }
    this.database = firebase.database();
  }

  addCoffee(coffee) {
    let stringDate = coffee.createDate.toISOString().slice(0, 10);
    console.log(stringDate);
    this.database.ref('coffees/').push({
      name: coffee.name,
      description: coffee.description,
      createDate: stringDate,
      addedBy: coffee.addedBy,
      value: coffee.value,
      ingredients: coffee.ingredients,
    })
  }

  withCatalog(operation) {
    this.database.ref('coffees/').once('value').then(function(snapshot) {
      var data = snapshot.val();
      operation(data);
    });
  }

  withCoffee(id, operation) {
    this.database.ref('coffees/' + id).once('value').then(function(snapshot) {
      var data = snapshot.val();
      operation(data);
    });
  }

  addMark(id) {
  }

  addComment(id) {
  }

  getRating(coffee) {
    if (!coffee.hasOwnProperty('marks')) {
      return 0;
    }

    let marks = Object.values(marks);
    if (marks.length == 0) {
      return 0;
    }
    return marks.reduce((a, b) => (a + b)) / marks.length;
  }
}


let coffeeStorage = new Storage();
