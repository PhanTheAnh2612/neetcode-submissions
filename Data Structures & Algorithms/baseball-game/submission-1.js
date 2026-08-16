class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;
        for (let op of operations) {
            switch(op) {
            case '+': {
                const num1 = stack.at(-1);
                const num2 = stack.at(-2);
                const sum = num1 + num2;
                stack.push(sum);
                total += sum;
                break;
            }
            case 'D': {
                const num1 = stack.at(-1);
                const res = num1 * 2;
                stack.push(res);
                total += res;
                break;
            }
            case 'C': {
                const num1 = stack.pop();
                total -= num1;
                break;
            }
            default: {
                const num = Number(op);
                total += num;
                stack.push(Number(op));
            }
            }
        }

        // return stack.reduce((r, e) => r + e, 0);
        return total;
    }
}
