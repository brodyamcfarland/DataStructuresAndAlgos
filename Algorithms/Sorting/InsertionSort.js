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
