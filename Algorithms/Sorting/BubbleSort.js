// Bubble Sort

// Least to Greatest

const numbers = [99, 2, 10, 22, 30, 65];

const bubbleSort = (array) => {
    const length = array.length; //6
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                // Swap Numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}; // O(n^2)

console.log(bubbleSort(numbers));
console.log(numbers);

//-----------------------------------------------//
const bubbleSort2 = (arr) => {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Loop through the array again, starting from the end and working backwards
        for (let j = arr.length - 1; j > i; j--) {
            // If the current element is greater than the next element, swap them
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }

    // Return the sorted array
    return arr;
};
