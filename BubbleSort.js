var MODULE = (function () {
// Bubble Sort

function bubbleSort(arr1){
  let countArr1 = arr1.length-1;
  let swapArr1 = 0;
  for (let i=0; i<countArr1; i++) {
    for (let j=0; j<countArr1-i; j++) {
      if (arr1[j] > arr1[j+1]) {
        swapArr1 = arr1[j+1];
        arr1[j+1] = arr1[j];
        arr1[j] = swapArr1;
      }
    }
  }
  return arr1
}

console.log(bubbleSort([2,4,5,3,6,7,4,2]))

  return{bubbleSort:bubbleSort};
  
}());
