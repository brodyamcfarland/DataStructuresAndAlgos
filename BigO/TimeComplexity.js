// Big O - tells us how well a problem is solved, distinguishes good and bad code (Readable and Scalable)
// O(1) Constant - no loops (Excellent Scalability)
    const boxes = [0,1,2,3,4,5,6,7];

    const logFirstTwoBoxes = () => {
        console.log(boxes[0]); // 0(1)
        console.log(boxes[1]); // 0(1)
    }

    logFirstTwoBoxes(boxes); // 0(2) --> Constant
// O(log N) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear - for loops, while loops through n items (Fair Scalability)
    const array = new Array(100).fill("Nemo");

    const findNemo = () => {
        for (let i = 0; array.length; i++) {
            if (array[i] === "Nemo") {
                console.log("Found Nemo!");
            }
        }
    };

    findNemo(array); //O(100) --> Linear Time, Most Common
// O(n log(n)) Log Linear - usually sorting operations
// O(n^2) Quadratic (Horrible Scalability) - every element in a collection needs to be compared to ever other element. Two nested loops
// O(2^n) Exponential - recursive algorithms that solves a problem of size N
// O(n!) Factorial (Terrible Scalability) - you are adding a loop for every element

// Iterating through half a collection is still O(n)

// Two separate collections: O(a * b)
//========================================================================================================================
// WHAT CAN CAUSE TIME IN A FUNCTION :
    // Operations (+,-, \*, /)
    // Comparisons (<, >, ===)
    // Looping (for, while)
    // Outside Function call (function())

//Calculating Big O
        const functionX = (input) => {
            let a = 5; // O(1)
            let b = 10; // O(1)
            let c = 50; // O(1)
            for (let i = 0; i < input; i++) {
                let x = i + 1; // O(n)
                let y = i + 2; // O(n)
                let z = i + 3; // O(n)
            }
            for (let j = 0; j < input, i++) {
                let p = j * 2; // O(n)
                let q = j * 2; // O(n)
            }
            let g = "idk"; // O(1)
        } 
// BIG O(4 + 5n), but just turns into 0(n) * Will never have to calculate this, just know 0(1) and 0(n)

// BIG O Rules:
    // 1) Worst Case
        // You can break loops after you get the value you are looking for by using ("break;")
    // 2) Remove Constants
    // 3) Different terms for inputs
        // Different Inputs have different variables O(a+b)
    // 4) Drop Non Dominants
        // O(n + n^2) = O(n^2)

// Nested Loops O(n^2) 
    const boxes2 = [a,b,c,d,e];

    function logAllPairsOfArray(array) {
        for (let i = 0; i < array.length; i++) { // O(n)
            for (let j = 0; j < array.length; j++) { // O(n)
                console.log(i, j);
            }
        }
    }

    logAllPairsOfArray(boxes2); // O(n*n) = O(n^2)