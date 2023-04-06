`You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

 

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].`

// -------------------mine-------------------
var countMatches = function(items, ruleKey, ruleValue) {
    let a=0
    let c=0
    if(ruleKey=='color'){
        a=1
    }else if(ruleKey=='name'){
        a=2
    }
    for(let i of items){
if(i[a]==ruleValue){
    c+=1
}
    }
    return c
};
// -------------------better time-------------------
var countMatches = function(items, ruleKey, ruleValue) {
    let idxMap = {
        'type' : 0,
        'color' : 1,
        'name': 2
    }
    let cnt = 0
    let idx = idxMap[ruleKey]

    items.forEach(el => {
        if (el[idx] === ruleValue) {
            cnt++
        }
    })

    return cnt
};
// -------------------2nd better-------------------
var countMatches = function(items, ruleKey, ruleValue) {
    let ruleKeys = ['type','color','name'];
    let index = ruleKeys.indexOf(ruleKey);
    let count = 0;
        for (let i=0; i<items.length; i++){
            if (items[i][index]===ruleValue)
            count++;
        }
    return count;
};