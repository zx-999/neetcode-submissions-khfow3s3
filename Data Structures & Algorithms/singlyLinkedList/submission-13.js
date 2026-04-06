class Node {
    constructor(val, nextNode = null) {
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (!this.head) return -1;
        let currentNode = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) return currentNode.val;
            if (!currentNode.next) return -1
            currentNode = currentNode.next
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode
        }
      
    }


    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) return false;
        let currentNode = this.head
        let previousNode = null
        for (let i = 0; i < index; i++) {
            if (!currentNode.next) return false;
            previousNode = currentNode;
            currentNode = currentNode.next
        }
        // if we are removing the head
        if (!previousNode) {
            this.head = currentNode.next
            // if there is only one item,
            if (!this.head) this.tail = null;
        }
        else {
            previousNode.next = currentNode.next;
            // if we removed the tail
            if (!previousNode.next) this.tail = previousNode;
        }
        return true;

    }

    /**
     * @return {number[]}
     */
    getValues() {
        if (!this.head) return [];
        let currentNode = this.head
        const returnedValues = []
        while (!!currentNode) {
            returnedValues.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return returnedValues;
    }
}
