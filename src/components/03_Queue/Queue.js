export class Queue {
    constructor() {
        this.items = []
    }

    // 进入队列
    enqueue(element) {
        this.items.push(element)
    }

    // 剔除队列
    dequeue() {
        return this.items.shift()
    }

    // 查看队列第一个元素
    front() {
        return this.items[0]
    }

    // 队列是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 队列的长度
    size() {
        return this.items.length
    }

    // 队列转字符串

    toString() {
        return this.items.join(', ')
    }

}