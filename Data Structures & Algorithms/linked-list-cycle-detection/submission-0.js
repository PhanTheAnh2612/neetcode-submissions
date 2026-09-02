/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next) {
            return false;
        }
        const visited = new Map();
        let cur = head;
        while (cur !== null) {
            if (visited.has(cur)) {
                return true;
            }
            visited.set(cur, true);
            cur = cur.next;
        }

        return false;
    }
}
