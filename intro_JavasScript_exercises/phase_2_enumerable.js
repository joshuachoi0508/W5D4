Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let value = initialValue;
  
  if (initialValue) {
    this.myEach((el) => value = callback(value, el));
  } else {
    value = this[0];
    this.slice(1).myEach((el) => value = callback(value, el));
  }
  return value;
};

