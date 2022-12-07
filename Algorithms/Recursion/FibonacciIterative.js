// Gicen a number N return the index value of the Fibonacci sequence, where the sequence is:
// ex: n = 2
// 0 1 2 ==== returns 1
// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, thats mean thats for N=5 -> 2+3

const fibonacciIterative = (n) => {
    // For Loop Version
    let array = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        array.push(array[i - 2] + array[i - 1]);
    }

    return array[n];
}; // O(n)

console.log(fibonacciIterative(10));

const fibonacciRecursive = (n) => {
    // Recursion Approach
    if (n < 2) {
        // because the index of 0 or 1 will always be 0 and 1 respectively, and so it will end by returning n
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}; // O(2^n) Exponential - Horribble Complexity

console.log(fibonacciRecursive(10)); // If we input 50, it will take forever due to an exponential amount of function calls
