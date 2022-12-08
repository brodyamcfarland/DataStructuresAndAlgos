const numbers = [99, 60, 20, 5, 1, 10];

const insertionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move to the correct spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
};

insertionSort(numbers);
console.log(numbers);

//------------------------------------------------//
const insertionSort2 = (arr) => {
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];

        // Loop through the array backwards, starting from the current position
        // and working towards the beginning of the array
        for (let j = i - 1; j >= 0; j--) {
            // If the current element is less than the element at the current position,
            // move the element at the current position to the right by one
            if (current < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                // Otherwise, insert the current element in the current position and break the inner loop
                arr[j + 1] = current;
                break;
            }
        }
    }

    // Return the sorted array
    return arr;
};

// Example: sort the array [9, 3, 1, 4, 6] in ascending order
console.log(insertionSort([9, 3, 1, 4, 6])); // [1, 3, 4, 6, 9]
