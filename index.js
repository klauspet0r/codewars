const memo = {};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  // Check if the result is already memoized
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Calculate and memoize the result
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

const n = 10;

console.time('fibo');

console.log(fibonacci(n));

console.timeEnd('fibo');