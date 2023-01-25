`2114. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words. 

`;
// my solve
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let sentence of sentences) {
    let n = sentence.split(" ").length;
    if (n > max) {
      max = n;
    }
  }
  return max;
};

// alternative
var mostWordsFound2 = function (sentences) {
  let max = 0;
  let ar = [];
  for (let sentence of sentences) {
    ar.push(sentence.length);
  }
  console.log(Math.max(...ar)) 
};
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

mostWordsFound2(sentences)