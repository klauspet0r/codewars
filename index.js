function fibonacci(n) {
  if(n==0 || n == 1)
      return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

const n = 10;

console.time('fibo');

console.log(fibonacci(n));

console.timeEnd('fibo');