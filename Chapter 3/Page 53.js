var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join();
// "Monkey,Cat,Fish,Lizard"

var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join(" - ");
// "Monkey - Cat - Fish - Lizard"
boringAnimals.join("*");
// "Monkey*Cat*Fish*Lizard"
boringAnimals.join(" sees ");
// "Monkey sees Cat sees Fish sees Lizard"

var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");
// "Nicholas Andrew Maxwell Morgan"

myNames[0] + " " + myNames[1] + " " + myNames[2] + " " + myNames[3];
// "Nicholas Andrew Maxwell Morgan"
