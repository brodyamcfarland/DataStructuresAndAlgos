// Write two functions that finds the factorial of any number. One should be recursive, the other should be a for loop.
// Factorial
// 5! = 5*4*3*2*1
// 5! = 5*4!
// 5! = 5*4*3!

const findFactorialRecursive = (number) => {
    let answer = 1;
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}; // O(n)

const findFactorialIterative = (number) => {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}; // O(n)

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
