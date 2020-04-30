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
    this.database.ref('coffees/').push({
      name: coffee.name,
      description: coffee.description,
      createDate: coffee.createDate.toISOString().slice(0, 10),
      addedBy: coffee.addedBy,
      value: coffee.value,
      ingredients: coffee.ingredients,
    })
  }

  async getCatalog() {
    return (await this.database.ref('coffees/').once('value')).val();
  }

  async getCoffee(id) {
    return (await this.database.ref('coffees/' + id).once('value')).val();
  }

  addMark(coffeeId, userId, mark) {
    this.database.ref(`coffees/${coffeeId}/marks/${userId}`).set(+mark);
  }

  addComment(coffeeId, comment) {
    this.database.ref(`coffees/${coffeeId}/comments/`).push({
        author: comment.author,
        text: comment.text,
        date: comment.date.toISOString().slice(0, 10)
      }
    );
  }

  getRating(coffee) {
    if (!('marks' in coffee)) {
      return 0;
    }

    let marks = Object.values(coffee.marks);
    if (marks.length == 0) {
      return 0;
    }
    return marks.reduce((a, b) => (a + b)) / marks.length;
  }
}

let coffeeStorage = new Storage();
