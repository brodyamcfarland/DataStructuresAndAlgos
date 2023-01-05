const digits = [1, 3, 4, 9, 9];

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        // For loop will run intil i < 0
        // Starting at the last index, where i >= 0;
        if (digits[i] === 9) {
            digits[i] = 0;
            console.log(digits);
        } else {
            digits[i]++;
            return digits;
        }
    }
    console.log(digits);
    digits.unshift(1); // This will run if the last number is 9
    return digits;
};

console.log(plusOne(digits));
