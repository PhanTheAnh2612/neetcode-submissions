class Solution {
public:
    bool isPalindrome(string s) {
        string splited = "";
        for(auto c : s )
        {
            char temp = tolower(c);
            if(('a' <= temp && temp<= 'z')
             ||('0' <= temp && temp <= '9'))
            {
                splited += temp;
            }
        }

        cout << splited;

        int i = 0, j = splited.size()-1;
        while(i<=j)
        {
            if(splited[i] != splited[j])
            {
                return false;
            }
            i++;
            j--;
        }

        return true;

    }
};
