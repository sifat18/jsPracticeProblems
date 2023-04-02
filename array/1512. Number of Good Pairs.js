// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    let c=0
    let l=nums.length
    for (let i=0;i<l-1;i++){
        for (let j=1;j<l;j++){
            if(nums[i]===nums[j] && i<j){
                c+=1
            }
        }
    }
    return c
};