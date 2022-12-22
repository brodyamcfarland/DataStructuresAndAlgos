// Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations = 0;

const fibonacci = (n) => {
    calculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10)); // <---- takes a ton of steps O(2^n)
console.log(calculations, "Calculations without Memoization"); // 177 Calculations

// Improve using memoization and dynamic programming

let calculations2 = 0;

const fibonacciMaster = () => {
    let cache = {};
    return function fib(n) {
        calculations2++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    };
};

//O(n) but more memory is used, but faster
const fasterFib = fibonacciMaster();
console.log(fasterFib(10));
console.log(calculations2, "Calculations with Memoization"); // 19 Calculations
