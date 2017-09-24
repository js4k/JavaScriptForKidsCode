var speak = function () {
  console.log(this.sound + "! My name is " + this.name + "!");
};

var cat = {
  sound: "Miaow",
  name: "Mittens",
  speak: speak
};

cat.speak();
// Miaow! My name is Mittens!

var pig = {
  sound: "Oink",
  name: "Charlie",
  speak: speak
};

var horse = {
  sound: "Neigh",
  name: "Marie",
  speak: speak
};

pig.speak();
// Oink! My name is Charlie!

horse.speak();
// Neigh! My name is Marie!
