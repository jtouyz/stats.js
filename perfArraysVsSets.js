// ======================================
// Performance for arrays vs sets
// ======================================
// https://www.google.com/search?q=appending+an+array+speed+javascirpt&oq=appending+an+array+speed+javascirpt&aqs=chrome..69i57.5071j0j7&sourceid=chrome&ie=UTF-8

// --- For arrays --

var timer = function(name) {
  var start = new Date();
  return {
    stop: function() {
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log('Timer:', name, 'finished in', time, 'ms');
    }
  }
};

var getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

var lastNames = ['SMITH', 'JOHNSON', 'WILLIAMS', 'JONES', 'BROWN', 'DAVIS', 'MILLER', 'WILSON', 'MOORE', 'TAYLOR', 'ANDERSON', 'THOMAS'];

var genLastName = function() {
  var index = Math.round(getRandom(0, lastNames.length - 1));
  return lastNames[index];
};

var sex = ["Male", "Female"];

var genSex = function() {
  var index = Math.round(getRandom(0, sex.length - 1));
  return sex[index];
};

var Person = function() {
  this.name = genLastName();
  this.age = Math.round(getRandom(0, 100))
  this.sex = "Male"
};

var genPersons = function() {
  for (var i = 0; i < 100000; i++)
    personArray.push(new Person());
};

var changeSex = function() {
  for (var i = 0; i < personArray.length; i++) {
    personArray[i].sex = genSex();
  }
};

var deleteMale = function() {
  for (var i = 0; i < personArray.length; i++) {
    if (personArray[i].sex === "Male") {
      personArray.splice(i, 1)
      i--
    }
  }
};

var t = timer("Array");

var personArray = [];

genPersons();

changeSex();

deleteMale();

t.stop();

console.log("Done! There are " + personArray.length + " persons.")


// Profiling appending to a set
var timer = function(name) {
  var start = new Date();
  return {
    stop: function() {
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log('Timer:', name, 'finished in', time, 'ms');
    }
  };
};

var profilePerformance = function(functionIn, N = 100){
  for (var i = 0; i < N; i++){
    var t = timer("Array");
      functionIn();
    t.stop();
  }
};

var arrayAppend = function(a=[], n =1000000){
    for (var i = 0; i<n; i++){
      a[i] = Math.random();
  }
};
profilePerformance(arrayAppend);

var arrayPush = function(a=[], n =1000000){
    for (var i = 0; i<n; i++){
      a.push(lowerBound + Math.random()*(upperBound-lowerBound));
  }
};
profilePerformance(arrayPush);
