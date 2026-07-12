class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(0);
        } else {
            const minVal = this.stack.at(this.minStack.at(-1));
            if (val < minVal) {
                this.minStack.push(this.stack.length - 1);
            }
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        const idx = this.stack.length - 1;
        if (this.minStack.at(-1) > idx) {
            this.minStack.pop();
        }
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
        const minIdx = this.minStack.at(-1);
        return this.stack.at(minIdx);
    }
}
