module.exports = (function () {
// Bubble Sort

function bubbleSort(arr){
  let countArr = arr.length-1;
  let temp = 0;
  for (let i=0; i<countArr; i++) {
    for (let j=0; j<countArr-i; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort([2,4,5,3,6,7,4,2]))

  return{bubbleSort};
  
}());
