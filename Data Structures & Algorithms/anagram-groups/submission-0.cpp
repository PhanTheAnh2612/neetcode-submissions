class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<string> temp = strs;

        unordered_map<string, vector<int>> um;
        for(int i = 0; i<temp.size(); i++)
        {
            sort(temp[i].begin(), temp[i].end());
            um[temp[i]].push_back(i);
        }

        vector<vector<string>> res;

        for(pair<string, vector<int>> e : um)
        {
            vector<int> umVal = e.second;
            vector<string> umValString;
            for(auto index:umVal)
            {
                umValString.push_back(strs[index]);
            }
            res.push_back(umValString);
        }

        return res;
    }
};
