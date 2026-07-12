class Solution {
public:
    bool isOpenBracket(char c)
    {
       return (c == '(' || c == '[' || c == '{');
    }
    bool isMatched(char c1, char c2)
    {
        return (c1 == ')' && c2 == '('
            || c1 == ']' && c2 == '['
            || c1 == '}' && c2 == '{');
    }
    bool isValid(string s) {
        stack<char> st;
        for(int i=0; i<s.length(); i++)
        {
            if(st.empty() && !isOpenBracket(s[i]))
                return false;
            if(isOpenBracket(s[i])){
                st.push(s[i]);
                cout << "push" << endl;
                continue;
            }
            if(isMatched(s[i], st.top())) 
            {
                cout << "matched" << endl;
                st.pop();
            }
            else
            {
                cout << "doesnot" << endl;
                return false;
            }
        }
        if(st.empty()) return true;
        return false;
    }
};
