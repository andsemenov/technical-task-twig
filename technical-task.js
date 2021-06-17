const groupArrayElements = (array, n) => {
  const arraySize = array.length; // length of original array
  chunk_size = Math.ceil(arraySize / n); //length of splitted array (might be less for any groups of elements)
  const splittedArray = []; //new Array for splitted groups
  for (let i = 0; i < arraySize; i += chunk_size) {
    myChunk = array.slice(i, i + chunk_size); //
    splittedArray.push(myChunk); //added new group elements to result array
  }
  return splittedArray;
};

console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
