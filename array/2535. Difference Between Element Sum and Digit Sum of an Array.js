`You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

 

Example 1:

Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.`

// ---------------------------mine---------------------------
var differenceOfSum = function(nums) {
    let a=nums.reduce((x,y)=>x+y)
    b=0
    for (let i of nums){
       while(i>0){
b+=i%10
i=Math.floor(i/10)

       }

        }
    return Math.abs(a-b)
};
// --------------------better-time---------------------
var differenceOfSum = function(nums) {



    let totalSum = 0;
        let digitSum = 0;
    
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
    
            totalSum += num;
    
            while (num > 0) {
                digitSum += num % 10;
                num = Math.floor(num / 10);
            }
        }
    
        return Math.abs(digitSum - totalSum);
    };