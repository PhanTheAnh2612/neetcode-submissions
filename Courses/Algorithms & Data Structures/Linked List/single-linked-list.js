/**
 * Single Linked List: the concept is that one node connect to another node
 * 1. Each object is called ListNode, containing 2 attributes:
 *      1.1 value - The value of the node
 *      1.2 next - The next object (or address) that the current object is pointing to
 * 2. When instantiate the ListNode, we don't need to know where it is stored in memory.
 * 3. We need to ensure that the `next` pointer MUST NOT be NULL, unless the last ListNode
 * 4. If the LastNode points to the FirstNode, this list is called `Circular Linked List`
 * 5. When working with the Linked List, we should always declare the `head` and `tail`, indicating `FirstNode` and `LastNode` immediately
 *      5.1 Appending the new ListNode takes O(1) because we just need to update tail to the new ListNode
 *      5.2 Deleting any ListNode will take 0(n) because it has to traverse the entire list (the worst case). However,
 *          deleting a ListNode simply points the `next` of the previous object to the next object. We don't need to care about
 *          the garbage collection, OS will handle it.
 * 6. Time Complexity
 *      6.1 Access - O(n)
 *      6.2 Search - O(n)
 *      6.3 Insertion - O(1): Assuming you already have a reference to the node at the desired position
 *      6.3 Deletion - O(1): Assuming you already have a reference to the node at the desired position
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    const node = null;
    this.head = node;
    this.tail = node;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let cur = this.head;
    let i = 0;
    while (cur !== null) {
      if (i === index) {
        return cur.val;
      }
      i += 1;
      cur = cur.next;
    }

    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (index < 0 || !this.head) {
      return false;
    }

    // Remove head
    if (index === 0) {
      this.head = this.head.next;

      // If head is null, tail must be null (empty list)
      if (this.head === null) {
        this.tail === null;
      }
      return true;
    }

    let i = 0;
    let cur = this.head;
    // Find the node BEFORE the index
    while (cur !== null && i < index - 1) {
      cur = cur.next;
      i += 1;
    }

    if (cur === null || cur.next === null) {
      return false;
    }

    // Remove the tail
    if (cur.next === this.tail) {
      this.tail = cur;
    }
    cur.next = cur.next.next;
    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let cur = this.head;
    const arr = [];
    while (cur !== null) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  }
}

/**
 * Linked List Cycle Detection
 */

// My solution
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

//
/** Floyd's Cycle Detection:
    Think of it like a race track. The fast runner moves 2x the speed of the slow runner.
    If there's a cycle: When slow enters the cycle, fast is already inside (or enters shortly after). Since fast moves 2 steps for every 1 step of slow, fast closes the gap by 1 step each iteration. Eventually, fast will catch up to slow from behind.
    If there's NO cycle: Fast will eventually hit null and the loop stops.
    Key intuition:
    The "gap" between fast and slow shrinks by exactly 1 position each iteration. If the cycle has length L, then after at most L iterations, fast will be exactly at slow's position.
 */

/**
 * Step 1: slow at 2, fast at 3
    Step 2: slow at 3, fast at 5
    Step 3: slow at 4, fast at 3
    Step 4: slow at 5, fast at 5
    They met! Cycle exists!
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    let slow = head;
    let fast = head;
    let step = 0;

    while (fast && fast.next) {
      slow = slow.next; // +1 step
      fast = fast.next.next; // +2 steps
      step++;

      console.log(`Step ${step}: slow at ${slow.val}, fast at ${fast.val}`);

      if (slow === fast) {
        console.log(`They met! Cycle exists!`);
        return true;
      }
    }
    return false;
  }
}
