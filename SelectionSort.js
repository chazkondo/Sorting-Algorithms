var MODULE = (function () {
  // Selection Sort

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 10, 3, 1, 4, 5, -1];

// swap function helper
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  
    return{selectionSort:selectionSort};
    
  }());
  