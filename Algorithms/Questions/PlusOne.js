const digits = [1, 3, 4, 9, 9];

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        // For loop will run intil i < 0
        // Starting at the last index, where i >= 0, and moving left
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            // If number is not 9, increment the numbers and return the array
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1); // If the only number is 9, it will be turned into a zero and have a 1 popped to the front of array
    return digits;
};

console.log(plusOne(digits));
