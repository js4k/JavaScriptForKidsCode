var doHomeworkAlarm = function () {
  alert("Hey! You need to do your homework!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 60000);

clearTimeout(timeoutId);