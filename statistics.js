//sum
var sum = function(a){
  var j = 0;
  for (var i = 0, n = a.length; i < n; ++i)
  {
    j += a[i];
  }
  return count;
};

//product
var prod = function(a){
  var j = 0;
  for (var i = 0, n = a.length; i < n; ++i)
  {
    j *= a[i];
  }
  return count;
};

// min of an array
var min = function(numArray){
  var c = numArray.reduce(function(a, b) {
      return Math.min(a, b);
  });
  return c;
};

// max of an array
var max = function(numArray){
  var c = numArray.reduce(function(a, b) {
      return Math.max(a, b);
  });
  return c;
};

// quantile - to do

// Mean
var mean = function(a){
  return sum(a)/a.length;
};

// Median - to do

// Mode - to do



// Central p-Moment
var centralMoment = function(a, p, centered = true ){
  var n = a.length;
  if(centered){
    var mu = mean(a);
  }else{
    var mu = 0;
    }
  var error = new Array(n);
  for(var i = 0; i < n ;i++){
    loss = a[i] - mu;
    error[i] = Math.pow(loss, p);
  }
  var centralPMoment = mean(error);
  return centralPMoment;
};

// p-Moment (non-centered)
var pMoment = function(a, p){
  centralMoment(a,p,centered=false);
};

// Variance
var variance = function(a){
  var v = centralMoment(a,2);
  return v;
};
