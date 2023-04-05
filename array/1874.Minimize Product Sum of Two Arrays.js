`The product sum of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (0-indexed).

For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be 1*5 + 2*2 + 3*3 + 4*1 = 22.
Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order of the elements in nums1`

var minProductSum = function(nums1, nums2) {
let a=nums1.sort((a,b)=>a-b)
let b=nums2.sort((a,b)=>b-a)
console.log(a,b)
let s=0
for (let i=0;i<a.length;i++){
s+=a[i]*b[i]
}
console.log(s) 
}

minProductSum( [5,3,4,2],[4,2,2,5])