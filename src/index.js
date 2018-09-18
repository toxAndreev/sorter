class Sorter {
  constructor(arr=[]) {
    this.arr=arr;
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    
  this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let subArr = indices.map(index => this.array[index]);
    let sortedIndices = indices.sort();
    subArr.sort(this.compareFunction);
    sortedIndices.forEach((item, i) => {this.array[item] = subArr[i]});
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
