// ============================================
// Checking performance for sum across different
// functions
// ============================================
// Performance test, sum of an array
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = 0;
// Eval
  console.time("eval");
  for(var i = 0; i < 10000; i++) eval("result = (" + array.join("+") + ")");
  console.timeEnd("eval");
// Loop
  console.time("loop");
  for(var i = 0; i < 10000; i++){
    result = 0;
    for(var j = 0; j < array.length; j++){
      result += parseInt(array[j]);
    }
  }
  console.timeEnd("loop");
// Reduce
  console.time("reduce");
  for(var i = 0; i < 10000; i++) result = array.reduce(function(pv, cv) { return pv + parseInt(cv); }, 0);
  console.timeEnd("reduce");

// While
  console.time("while");
  for(var i = 0; i < 10000; i++){
    j = array.length;
    result = 0;
    while(j--) result += array[i];
  }
  console.timeEnd("while");
