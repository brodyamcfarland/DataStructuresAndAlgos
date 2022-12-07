// Queues

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            // If Nothing in Queue
            this.first = newNode;
            this.last = newNode;
        } else {
            //If There is...
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Brody"));
console.log(myQueue.enqueue("Haley"));
console.log(myQueue.enqueue("Izzy"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue);
