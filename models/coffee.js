class Coffee {
  constructor(name, addedBy, value, description, ingredients) {
    this.id = null;
    this.description = description;
    this.name = name;
    this.addedBy = addedBy;
    this.value = value;
    this.ingredients = ingredients;
    this.createDate = new Date();
    this.marks = [];
    this.comments = [];
  }

  addMark(mark) {
    this.marks.push(mark);
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  getRating() {
    if (this.marks.length == 0) {
      return 0;
    }
    return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
  }
}
