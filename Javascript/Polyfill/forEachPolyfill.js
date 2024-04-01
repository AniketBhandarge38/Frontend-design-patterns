const arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//   return console.log(element);
// });

Array.prototype.customeForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index]);
  }
};

arr.customeForEach((ele) => {
  return console.log(ele);
});
