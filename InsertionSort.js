module.exports = (function () {
// Insertion Sort

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 10, 10 ,10, 1, 3, 2, 5];

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  
    return{insertionSort};
    
  }());
  