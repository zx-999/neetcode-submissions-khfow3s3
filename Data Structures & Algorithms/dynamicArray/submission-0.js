class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;        
        this.array = new Array(this.capacity).fill(0)

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        // If capacity is reached, increase capacity with resize method
        if (this.size == this.capacity) {
            this.resize();
        }
        // Add element n to array at index this.size
        this.array[this.size] = n;
        // Increment this.size
        this.size++;
        return;
    }

    /**
     * @returns {number}
     */
    popback() {
        // grab last element in array
        const element = this.array[this.size-1]
        // reduce size/index
        this.size--;
        return element;
    }

    /**
     * @returns {void}
     */
    resize() {
        // increase capacity
        this.capacity *= 2;
        // create a new array, fill with 0s
        const newArr = new Array(this.capacity).fill(0);
        // iterate over old array, populate new array at corresponding indices
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.array[i];
        }
        this.array = newArr;
        return;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;

    }
}
