const points = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
];

const findMinArrowShots = (points) => {
    // Setting Params for while loops
    let length = points.length;
    let index = 0;
    // Set Result Param
    let res = 0;
    points.sort((a, b) => a[0] - b[0]); // Filters the x coordinates in order based off [0] and [1]

    while (index < length) {
        // set variables for first set of coordinates
        let left = points[index][0]; // left = first coordinate
        let right = points[index][1]; // right = second coordinate
        index++; //increment i for next loop
        while (
            // setting variables for next set of balloon coordinates
            index < length &&
            points[index][0] <= right &&
            points[index][1] >= left
        ) {
            left = Math.max(left, points[index][0]);
            right = Math.min(right, points[index][1]);
            index++; // Move to next balloon
        } // If conditions are not met, then the balloons cannot be burst by one arrow
        res++;
    }
    return res;
};

console.log(findMinArrowShots(points));
