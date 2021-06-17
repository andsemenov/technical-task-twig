const groupArrayElements = (array, n) => {
  var arraySize = array.length;
  chunk_size = Math.ceil(arraySize / n);
  var splittedArray = [];

  for (let index = 0; index < arraySize; index += chunk_size) {
    myChunk = array.slice(index, index + chunk_size);

    splittedArray.push(myChunk);
  }

  return splittedArray;
};

console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
