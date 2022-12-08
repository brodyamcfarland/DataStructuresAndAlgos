const selectionSort2 = (arr) => {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Set the minimum value to the current position
        let min = i;

        // Loop through the array again, starting from the next position
        for (let j = i + 1; j < arr.length; j++) {
            // If the current element is less than the minimum value, update the minimum value
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // If the minimum value is not at the current position, swap it with the current position
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    // Return the sorted array
    return arr;
};

// Example: sort the array [9, 3, 1, 4, 6] in ascending order
console.log(selectionSort([9, 3, 1, 4, 6])); // [1, 3, 4, 6, 9]

//----------------------------------------------//
const numbers = [99, 44, 6, 2, 1, 5, 10];

const selectionSort = (array) => {
    const length = array.length; // store length
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i; // store lowest number
        let temp = array[i]; // looping variable
        for (let j = i + 1; j < length; j++) {
            // loop with starting point + 1 than other index
            // update minimum if current is lower than what we had previously
            if (array[j] < array[min]) {
                min = j;
            }
        }
        // swapping
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
};

selectionSort(numbers);
console.log(numbers);
