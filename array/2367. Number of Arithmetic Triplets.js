// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

 

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// indexes (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// indexes (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

// brute force-------------------
var arithmeticTriplets = function(nums, diff) {
    let n = nums.length
    let c = 0
    for (let i=0;i<n;i++){
     for (let j=i+1;j<n;j++){
     for (let k=j+1;k<n;k++){
         if(nums[j]-nums[i]==diff && nums[k]-nums[j]==diff){
             c+=1
         }

        
    }   
    }   
    }
    return c
};
///-------------------better with set-------------------
var arithmeticTriplets = function(nums, diff) {
    let c = 0
    let s=new Set(nums)
    for(let i of nums){
        if (s.has(i+diff) && s.has(i-diff)){
            c+=1
        }
    }
    return c
};
// // ------------------- better with index of -------------------

var arithmeticTriplets = function(nums, diff) {
    let c = 0
 for (let i=0;i<nums.length;i++){
     let f=nums[i]+diff
     if(nums.indexOf(f,i)!==-1){
         f=f+diff
         if(nums.indexOf(f,i)!==-1){
         c+=1
     }
     }
 }
    return c
};