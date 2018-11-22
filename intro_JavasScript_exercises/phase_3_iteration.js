Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (sorted === false) {
  
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let num1 = this[i];
      let num2 = this[i+1];
        
      if (num1 > num2) {
        sorted = false;
        this[i] = num2;
        this[i+1] = num1;
      }
    }
  }
  
  return this;
};

// String.prototype.substrings = function() {
//   let substrings = [];
// 
//   for (let i = 0; i < this.length; i++) {
//     let substring = this[i];
//     if (substring.length === 1) {
//       substrings.push(substring);
//     }
// 
//     for (let j = i + 1; j < this.length; j++) {
//       substring += this[j];
//       substrings.push(substring);
//     }
//   }
//   return substrings;
// };

String.prototype.substrings = function () {
  let substrings = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i, j));
    }
  }
  
  return substrings;
};






