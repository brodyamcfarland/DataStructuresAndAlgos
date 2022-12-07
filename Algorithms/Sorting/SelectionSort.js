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
