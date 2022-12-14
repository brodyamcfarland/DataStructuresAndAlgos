const mergeSort = (arr) => {
    // If there is 1 item in the array return it
    if (arr.length === 1) {
        return arr;
    }
    // Split Array in the middle, left and right
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [4, 6, 1, 3, 5, 2];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6]
