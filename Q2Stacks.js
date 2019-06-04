//implement a stack using two queues
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }
    add(value){
        this.first.push(value)
    }
    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }

        const val = this.second.pop();

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return val
    }

    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop());
        }

        const val = this.second.peek();

        while(this.second.peek()){
            this.first.push(this.second.pop());
        }
        
        return val
    }
}
const q = new Queue();
q.add(1);
q.add(2);
q.peek();  // returns 1
q.remove(); // returns 1
q.remove(); // returns 2