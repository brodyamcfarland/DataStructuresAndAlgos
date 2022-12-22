//Memoization

const add80 = (n) => {
    return n + 80;
};

//We can improve this function by creating a cache for answers thats have been already solved

let cache = {
    // <----- the answer to 5 will be stored by li
};

const memoizedAdd80 = (n) => {
    if (n in cache) {
        console.log("Cached Result");
        return cache[n];
    } else {
        console.log("Longer Calculation");
        cache[n] = n + 80;
        console.log("Added to Cache");
        return cache[n];
    }
};

console.log(memoizedAdd80(5));
console.log(memoizedAdd80(5)); // Cached
console.log(memoizedAdd80(10));
console.log(memoizedAdd80(10)); // Cached

//Memoization 2 - Move 'let cache = {}' to inside of the function

const add80Two = (n) => {
    return n + 80;
};

const memoizedAdd80Two = () => {
    let cache2 = {};
    return function (n) {
        if (n in cache) {
            console.log("Cached Result");
            return cache[n];
        } else {
            console.log("Longer Calculation");
            cache[n] = n + 80;
            console.log("Added to Cache");
            return cache[n];
        }
    };
};

const memoized = memoizedAdd80Two();

console.log(memoized(20));
console.log(memoized(20));
