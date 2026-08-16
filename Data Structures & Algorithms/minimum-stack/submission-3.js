class MinStack {
    constructor() {
        this.minIdx = 0;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (val < this.getMin()) {
            this.minIdx = this.stack.length - 1;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.stack);
    }
}
