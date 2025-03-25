function move(array, fromIndex, toIndex) {
  let arr = array.slice();
  let len = arr.length;

  fromIndex = fromIndex < 0 ? len + fromIndex : fromIndex;
  toIndex = toIndex < 0 ? len + toIndex : toIndex;

  if (fromIndex >= 0 && fromIndex < len && toIndex >= 0 && toIndex < len) {
    let [item] = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, item);
  }

  return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
