class LinkedList {
    // initialize empty linked llist
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    // int get(int i) will return the value of the ith node (0-indexed). 
    // If the index is out of bounds, return -1.

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let nodeTracker = this.head;
        let indexTracker = 0;
        while (nodeTracker != null) {
            if (index == indexTracker) return nodeTracker.value;
            nodeTracker = nodeTracker.next;
            indexTracker++;
        }
        return -1
    }

    // void insertHead(int val) will insert a node with val at the head of the list.

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = {
            value: val,
            next: this.head
        }
        this.head = newNode;
        if (this.length == 0) {
            this.tail = newNode;
        }

        this.length++;
        return;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = {
            value: val,
            next: null
        };
        if (this.length == 0 ) {
            console.log("First node added")
            this.head = newNode;
        }
        else {
            console.log("new tail addded")
            this.tail.next = newNode;

        }
        this.tail = newNode;
        this.length++;
        return;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        console.log("in remove")
        if (index > this.length - 1) return false;
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            let nodeTracker = this.head
            let indexTracker = 0;


            while (indexTracker < index-1) {
                nodeTracker = nodeTracker.next;
                indexTracker++;
            }
            if (nodeTracker.next.next == null) {
                nodeTracker.next = null; 
                this.tail = nodeTracker;
            }
            else nodeTracker.next = nodeTracker.next.next;

            // will exit this loop when nodeTracker is pointing to the target node
        }
        this.length--;
                console.log("out remove")

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        if (this.length == 0) return [[]];
        let nodeTracker = this.head;
        const output = [];
        while (nodeTracker.next != null) {
            output.push(nodeTracker.value);
            nodeTracker = nodeTracker.next;
        }
        output.push(this.tail.value);
        return output;
    }
}
