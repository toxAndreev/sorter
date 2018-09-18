class Sorter {
  constructor(arr=[]) {
    this.arr=arr;
  }

  add(element) {
    
  this.arr.push(element);
  }

  at(index) {
    // your implementation
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
