// let arr = [1, 2, 2, 3, 4, 4, 5];
// let arr = // [1, 2, 3, 4, 5]
let arr = [1, -2, -2, 3, 4, -5, -6, -5 ]
let newArr = [];

for (const val of arr) {
  if (!newArr.includes(val)) newArr.push(val);
}
console.log("Natija: ", newArr)