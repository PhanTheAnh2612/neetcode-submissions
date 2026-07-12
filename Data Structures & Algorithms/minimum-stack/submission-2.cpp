class MinStack {
public:
    vector<int> stack;
    MinStack() 
    {

    }
    
    void push(int val) {
        stack.push_back(val);
    }
    
    void pop() {
        stack.erase(stack.end()-1);
    }
    
    int top() {
        int temp = stack[stack.size()-1];
        return temp;
    }
    
    int getMin() {
        int res = stack[0];
        for(auto e : stack)
        {
            if(e <= res) res = e;
        }
        return res;
    }
};
