const s = "abcdefgabcbb";
// Expecting "abc" as answer
// Must return a number ex. 3

const lengthOfLongestSubstring = (s) => {
    // Declare a set to store the characters in the current window
    let seen = new Set();

    // Declare a variable to store the length of the longest substring seen so far
    let longest = 0;

    // Declare a variable to store the left end of the current window
    let l = 0;

    // Iterate through each character in the input string
    for (let r = 0; r < s.length; r++) {
        // While the current character at the right end of the window is already in the set
        while (seen.has(s[r])) {
            // Remove the character at the left end of the window from the set
            seen.delete(s[l]);
            // Increment the left end of the window
            l++;
        }

        // Add the current character at the right end of the window to the set
        seen.add(s[r]);

        // Update the length of the longest substring seen so far with the maximum of the current window length and the current longest length
        longest = Math.max(longest, r - l + 1);
    }

    // Return the length of the longest substring seen
    return longest;
};

console.log(lengthOfLongestSubstring(s));
