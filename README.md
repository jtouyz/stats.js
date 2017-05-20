# A collection of stats modules

Some fun with stats modules in javascript

## Math calcs
1. [x] sum
2. [x] prod
3. [x] min
4. [x] max
5. [ ] quantile


## Statistics
1. Measures of central tendency
 1. [ ] Mean
 2. [ ] Median
 3. [ ] Mode
2. Measures of dispersion
  1. [x] Central Moments
  2. [x] Variance
  3. [x] p-Moment

## Probability Distributions
1. Uniform
  - [x] Random numbers
2. Beta
3. Binomial
4. Cauchy
5. Chi-Square
6. Exponential
7. F
8. Gamma
9. Geometric
10. Hypergeometric
11. Logistic
12. Log Normal
13. Negatvie Binomial
14. Normal
15. Poisson
16. Student t
17. Studentized Range
18. Uniform
19. Weibull
20. Wilcoxon Rank Sum statistic
21. Wilcoxon Signed Rank Statistic
22. Multivariate normal


# Unit tests
1.

### Notes on performance choices:
- Expressions preferred over Expressions
  - Avoids hosting problems
  - Can be used un functional paradigms
- Optimization of methods based on the tests:
  - https://jsperf.com/loops/106
- Performance between sets and for loops are comparable in the absence of 'delete' operation for appending arrays
- Pre-allocate vs non-preallocate array
  - Small array's, pre-allocate:  
    - https://jsperf.com/array-preallocation-performance/11
  - Large array's pre-allocate <10000,
   - https://jsperf.com/preallocating-array/9
   - https://jsperf.com/preallocating-array/15
- Max/min operations executed using 'reduce' function since doesn't suffer from stack overflow issues
