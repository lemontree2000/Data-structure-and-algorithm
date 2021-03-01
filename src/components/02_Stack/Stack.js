
export class Stack {
    constructor() {
        this.items = []
    }
    // 出栈
    pop() {
        return this.items.pop();
    }

    //进栈
    push(element) {
        this.items.push(element);
    }

    // 查看栈顶
    peek() {
        return this.items[this.size() - 1]
    }
    // 查看栈的长度

    size() {
        return this.items.length;
    }

    // 查看栈是非为空
    isEmpty() {
        return this.size() === 0
    }
    
    // 返回栈的字符串
    toString() {
        return this.items.join(',')
    }   
}

export function dec2binary(decimalNumber) {
    const stack = new Stack()
    while (decimalNumber > 0) {
        stack.push(decimalNumber % 2)
        decimalNumber = Math.floor(decimalNumber / 2)
        console.log(decimalNumber)
    }
    let binaryString = ''
    while (!stack.isEmpty()) {
       binaryString += stack.pop() 
    }
    return binaryString
}