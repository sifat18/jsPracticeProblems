// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l = new ListNode(0, null)
    let r = l
    console.log(list1)
    while (list2 && list1) {
        if (list2.val <= list1.val) {
            r.next = list2
            list2 = list2.next

        } else {
            r.next = list1
            list1 = list1.next
        }
        r = r.next

    }
    r.next = list1 || list2
    return l.next
}

