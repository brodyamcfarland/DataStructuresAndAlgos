// Heap -> Where we assign variables
// Stack -> Where we do function calls

//Space Complexity -> variables, data structures, function calls, and allocations

function foo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("sup foo");
    }
}

foo([1, 2, 3, 4, 5]); //O(1) Good

function arrayOfHi(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}

arrayOfHi(6); //O(n) Ok

//There is a tradeoff between Space and Time Complexity
