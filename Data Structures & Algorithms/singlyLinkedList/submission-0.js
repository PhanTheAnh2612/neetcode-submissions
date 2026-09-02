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
