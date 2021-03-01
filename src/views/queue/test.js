import { Queue } from "../../components/03_Queue/Queue";


const q = new Queue()
console.log('Queue------')
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q)

console.log(q.front())
console.log(q.dequeue())
console.log(q.isEmpty())

console.log(q.size())
console.log(q.toString())
