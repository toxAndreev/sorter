class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
	  this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
	  return this.array.length;
  }

  toArray() {
	  return this.array;
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
