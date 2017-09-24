var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
// ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]
furryAnimals;
// ["Alpaca", "Ring-tailed Lemur", "Yeti"]
scalyAnimals;
// ["Boa Constrictor", "Godzilla"]

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
// ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla", "Macaw", "Dodo"]
