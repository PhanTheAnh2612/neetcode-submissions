class Solution {
public:
    unordered_map<char, bool> um1;
    unordered_map<char, bool> um2;

    void Set()
    {
        for(int i='1'; i<='9'; i++)
        {
            um1[i] = false;
            um2[i] = false;
        }
    }

    bool isValidSudoku(vector<vector<char>>& board) {
        Set();
        //check col n row
        for(int i = 0; i < 9; i++)
        {
            for(int j = 0; j < 9; j++)
            {
                if(board[i][j] != '.'){
                    if(um1[board[i][j]] == false)
                        um1[board[i][j]] = true;
                    else
                        return false;
                }
                if(board[j][i] != '.')
                {
                    if(um2[board[j][i]] == false)
                        um2[board[j][i]] = true;
                    else
                        return false;
                }
            }   
            Set();
        }

        //check group
        vector<pair<int, int>> index = {
            {0, 0}, {0, 3}, {0, 6},
            {3, 0}, {3, 3}, {3, 6},
            {6, 0}, {6, 3}, {6, 6}};

        Set();
        for(auto e: index)
        {
            for(int i = e.first; i <= e.first + 2; i++)
            {
                for(int j = e.second; j <= e.second + 2; j++)
                {
                    if(board[i][j] != '.')
                    {
                        if(um1[board[i][j]] == false)
                            um1[board[i][j]] = true;
                        else
                            return false;
                    }
                }
            }
            Set();
        }

        return true;
    }
};
