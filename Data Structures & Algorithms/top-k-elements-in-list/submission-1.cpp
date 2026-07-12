class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> um;
        vector<int> index;
        for(auto e : nums)
        {
            um[e]++;
        }
        for(auto e : um)
        {
            index.push_back(e.second);
        }
        sort(index.begin(), index.end());
        vector<int> res;
        for(auto e : um)
        {
            if(e.second >= index[index.size()-k])
                res.push_back(e.first);
        }
        return res;
    }
};
