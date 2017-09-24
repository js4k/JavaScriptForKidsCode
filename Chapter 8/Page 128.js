var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMultipleTimes(5, "=^.^=");
// 0 =^.^=
// 1 =^.^=
// 2 =^.^=
// 3 =^.^=
// 4 =^.^=

printMultipleTimes(4, "^_^");
// 0 ^_^
// 1 ^_^
// 2 ^_^
// 3 ^_^

printMultipleTimes(2, "(>_<)");
// 0 (>_<)
// 1 (>_<)
