var dog = {
  name: "Pancake",
  legs: 4,
  isAwesome: true
};

dog.bark = function () {
  console.log("Woof woof! My name is " + this.name + "!");
};

dog.bark();
// Woof woof! My name is Pancake!
