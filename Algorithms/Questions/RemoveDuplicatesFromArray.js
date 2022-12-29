const nums = [1, 1, 2];

const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) nums[++i] = nums[j];
    }
    return ++i; //++i is a predecessor syntax and evaluates to the next index
};

console.log(removeDuplicates(nums));
