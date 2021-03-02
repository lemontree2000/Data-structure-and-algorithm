import { Queue } from './Queue'

class QueueElement {
    constructor(priority, element) {
        this.priority = priority
        this.element = element
    }
}


class PriorityQueue extends Queue {
    constructor() {
        super()
    }

    enqueue(priority, element) {
        const queueElement = new QueueElement(priority, element)
        if (this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.size(); i++) {
                if (priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }

}

const pq = new PriorityQueue()
pq.enqueue(2, '3')
pq.enqueue(4, '34')
pq.enqueue(3, '34')
pq.enqueue(1, '5555')
pq.enqueue(1, '5555')
console.log(pq)

export default PriorityQueue