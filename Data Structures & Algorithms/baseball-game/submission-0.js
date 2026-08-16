class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (let op of operations) {
            switch(op) {
            case '+': {
                const num1 = stack.at(-1);
                const num2 = stack.at(-2);
                stack.push(num1 + num2);
                break;
            }
            case 'D': {
                const num1 = stack.at(-1);
                stack.push(num1 * 2);
                break;
            }
            case 'C': {
                stack.pop();
                break;
            }
            default: stack.push(Number(op));
            }
        }

        return stack.reduce((r, e) => r + e, 0);
    }
}
