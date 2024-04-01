const arr = [1, 2, 3, 4];

// const newArr = arr.map((item) => {
//   return item + 5;
// });

Array.prototype.customeMap = function (callback) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(callback(this[index], index, this));
  }
  return res;
};

const newArr = arr.customeMap((item) => {
  return item + 5;
});

console.log(newArr);
