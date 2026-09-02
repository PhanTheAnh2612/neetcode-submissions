/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null;
    }

    insertTail(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head1 = list1;
        let head2 = list2;
        const linkedList = new LinkedList();
        
        while (head1 !== null && head2 !== null) {

            if (head1.val < head2.val) {
                linkedList.insertTail(head1);
                head1 = head1.next;
            } else {
                linkedList.insertTail(head2);
                head2 = head2.next;
            }
        }

        if (head1 !== null) {
            linkedList.insertTail(head1);
        } else if (head2 !== null) {
            linkedList.insertTail(head2);
        }

        return linkedList.head;
    }
}
