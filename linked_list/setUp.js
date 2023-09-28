class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0
    }

    getSize() {
        return this.length
    }
}

const list = new LinkedList();
console.log(list.isEmpty())
console.log(list.getSize())
