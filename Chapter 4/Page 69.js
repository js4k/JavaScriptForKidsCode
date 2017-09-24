var dinosaurs = [
  { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
  { name: "Stegosaurus", period: "Late Jurassic" },
  { name: "Plateosaurus", period: "Triassic" }
];

dinosaurs[0];
// { name: "Tyrannosaurus Rex", period: "Late Cretaceous" }
dinosaurs[0]["name"];
// "Tyrannosaurus Rex"
dinosaurs[1].period;
// "Late Jurassic"

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

friends[1];
// { name: "Dave", age: 5, luckyNumbers: Array[3] }

friends[2].name
// "Kate"

friends[0].luckyNumbers[1];
// 4
