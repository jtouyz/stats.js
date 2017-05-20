// Random numbers in an array

 var runif = function(n = 1, min = 0, max = 1){
  var a = new Array(n);
  for(var i =0; i<n;i++){
    c = max - min; //pre-calculate
    a[i] = (min + Math.random()*c);
  }
  return a;
};

var dunif = function(x, min = 0, max = 1, log = false){
  d = (max-min)/2;
  if (log) {
  return d;
  }
  else{
    return Math.log(d);
  }
};

dunif(x, min = 0, max = 1, log = FALSE)
punif(q, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)
qunif(p, min = 0, max = 1, lower.tail = TRUE, log.p = FALSE)
runif(n, min = 0, max = 1)
