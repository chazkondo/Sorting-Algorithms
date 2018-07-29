// Selection Sort

module.exports = (function () {

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
  
  return{
    swap,
    selectionSort
  };
    
}());
  