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
    let a = arr[indices[0]];
    if(arr[indices[1]]>arr[indices[0]]){
      arr[indices[0]]=arr[indices[1]];
      arr[indices[1]]=a;
    }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
