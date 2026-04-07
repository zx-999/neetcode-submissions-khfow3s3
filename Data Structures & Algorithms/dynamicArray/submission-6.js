class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(5).fill(undefined);
        this.capacity = capacity;
        this.size = 0;
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
        if (this.capacity === this.size) {
            this.resize();
            console.log(this.capacity)
        }
        this.array[this.size]=n
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback() {
        const returnVal = this.array[this.size-1];
        this.size -= 1;
        return returnVal

    }

    /**
     * @returns {void}
     */
    resize() {
        const newArr = new Array(this.capacity).fill(undefined);
        const oldArr = this.array
        this.capacity =  this.capacity * 2;
        this.array = oldArr.concat(newArr);
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
