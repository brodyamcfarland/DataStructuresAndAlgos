// Reverse a String

const string = "Brody";

const reverse1 = (string) => {
    return string.split("").reverse().join();
};

console.log(reverse1(string));
