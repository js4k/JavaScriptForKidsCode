var animals = [];
animals.push("Cat");
// 1
animals.push("Dog");
// 2
animals.push("Llama");
// 3
animals;
// ["Cat", "Dog", "Llama"]
animals.length;
// 3

animals;
// ["Cat", "Dog", "Llama"]
animals[0];
// "Cat"
animals.unshift("Monkey");
// 4
animals;
// ["Monkey", "Cat", "Dog", "Llama"]
animals.unshift("Polar Bear");
// 5
animals;
// ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]
animals[0];
// "Polar Bear"
animals[2];
// "Cat"

animals;
// ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]
var lastAnimal = animals.pop();
lastAnimal;
// "Llama"
animals;
// ["Polar Bear", "Monkey", "Cat", "Dog"]
animals.pop();
// "Dog"
animals;
// ["Polar Bear", "Monkey", "Cat"]
animals.unshift(lastAnimal);
// 4
animals;
["Llama", "Polar Bear", "Monkey", "Cat"]

animals;
// ["Llama", "Polar Bear", "Monkey", "Cat"]
var firstAnimal = animals.shift();
firstAnimal;
// "Llama"
animals;
// ["Polar Bear", "Monkey", "Cat"]
