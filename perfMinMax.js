// ============================================
// Checking performance for min and
// max across arrays
// ============================================

// Generating random numbers
var runif = function(n = 1, min = 0, max = 1){
 var a = new Array(n);
 for(var i =0; i<n;i++){
   c = max - min; //pre-calculate
   a[i] = (min + Math.random()*c);
 }
 return a;
};

numArrayIn = runif(100000);
// ============================================
// Speed operations
// ============================================
n = 20;
k = 20000;
minApply = new Array(n);
minSpread = new Array(n);
minReduce = new Array(n);
minRecursion = new Array(n);

// function reduce min
 var minHelper = function(numArray,i){
  var c = numArray.shift();
  if (numArray.length ==1){
    return i;
  } else if(i<c){
    return minHelper(numArray,i);
  } else{
    return minHelper(numArray,c);
  }
};

var minF = function(numArray){
  var c = numArray.shift();
  return minHelper(numArray, c);
};

var reduceMin = function(numArray){
  var c = numArray.reduce(function(a, b) {
      return Math.max(a, b);
  });
  return c;
};

for (var i = 0; i<n; i++){
  numArray = runif(k);

  //apply
if (k<125001){
  var startApply = new Date();
    Math.min.apply(null, numArray)
  var endApply = new Date();
  var timeApply = endApply.getTime() - startApply.getTime();
  minApply[i] = timeApply;

  //Spread
  var startSpread = new Date();
     Math.min(...numArray);
  var endSpread = new Date();
  var timeSpread = endSpread.getTime() - startSpread.getTime();
  minSpread[i] = timeSpread;
    // Tail recursion
  if (k<10001){
    var startRecursion = new Date();
      minF(numArray);
    var endRecursion = new Date();
    var timeRecursion = endRecursion.getTime() - startRecursion.getTime();
    minRecursion[i] = timeRecursion;
  }
}

  //reduce
  var startReduce = new Date();
  reduceMin(numArray)
  var endReduce = new Date();
  var timeReduce = endReduce.getTime() - startReduce.getTime();
  minReduce[i] = timeReduce;


 }
 console.log(minApply);
 console.log(minSpread);
 console.log(minReduce);
 console.log(minRecursion);
