var counter = 1;

var printMessage = function () {
  console.log("You have been staring at your console for " + counter + " seconds");
  counter++;
};

var intervalId = setInterval(printMessage, 1000);
// You have been staring at your console for 1 seconds
// You have been staring at your console for 2 seconds
// You have been staring at your console for 3 seconds
// You have been staring at your console for 4 seconds
// You have been staring at your console for 5 seconds
// You have been staring at your console for 6 seconds
clearInterval(intervalId);
