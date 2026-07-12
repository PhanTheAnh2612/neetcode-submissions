class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> pre, sub, res;

        int mult = 1;
        for (int i = 0; i < n; i++) {
            pre.push_back(mult);
            mult *= nums[i];
        }

        mult = 1;
        for (int i = n - 1; i >= 0; i--) {
            sub.push_back(mult);
            mult *= nums[i];
        }
        reverse(sub.begin(), sub.end());

        for (int i = 0; i < n; i++) {
            res.push_back(pre[i] * sub[i]);
        }

        return res;
    }
};
