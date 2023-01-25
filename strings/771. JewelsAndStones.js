`You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
`
var numJewelsInStones = function(jewels, stones) {
    let sum=0
    for (let s of stones)  {
  if (jewels.includes(s)){
      sum+=1
  }
    }
    return sum
  };

  numJewelsInStones("aA","aAAbbbb")