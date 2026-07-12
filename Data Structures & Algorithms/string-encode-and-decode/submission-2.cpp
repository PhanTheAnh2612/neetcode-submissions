class Solution {
public:
    char key = '\n';

    string encode(vector<string>& strs) {
        string res = "";
        for(int i=0; i<strs.size(); i++)
        {
            for(int j=0; j<strs[i].length(); j++)
            {
                strs[i][j] = strs[i][j] ^ key;
                res += strs[i][j];
            }
            res += '\n';
        }
        cout << res;
        return res;
    }

    vector<string> decode(string s) {
        vector<string> strs;
        string temp = "";
        for(int i=0; i<s.size(); i++)
        {
            if(s[i] == '\n')
            {
                strs.push_back(temp);
                temp = "";
                continue;
            }
            temp += s[i] ^ key;
        }
        return strs;
    }
};
