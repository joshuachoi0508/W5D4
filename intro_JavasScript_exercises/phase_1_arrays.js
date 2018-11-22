function myUniqArr(arr) {
  newArr = [];
  arr.forEach(l => {
    if (!newArr.includes(l)) {
      newArr.push(l);
    }
  });
  
  return newArr;
}

function twoSum(arr) {
  const zeroSums = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        zeroSums.push([i, j]);
      }
    }
  }
  
  return zeroSums;
}

function arrTranspose(matrix) {
  let transposed = [];
  let helperArr = matrix[0];
  
  for (let i = 0; i < helperArr.length; i++) {
    transposed.push([]);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    let innerArr = matrix[i];
    
    for (let i = 0; i < innerArr.length; i++) {
      transposed[i].push(innerArr[i]);
    }
  }
  return transposed;
}

