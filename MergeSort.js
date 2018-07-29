module.exports = (function () {
    //Merge sort

    function mergeSort(arr){
        let length = arr.length;
        if(length<2){
            return arr
        }else{
            let mid = Math.floor(length/2);
            let left = arr.slice(0,mid);
            let right = arr.slice(mid,arr.length);
            return merge(mergeSort(left), mergeSort(right))
        }
    }

    function merge(left, right){
        let result = [];
        while(left.length && right.length){
            if(left[0]<=right[0]){
                result.push(left.shift())
                debugger
            }else{
                result.push(right.shift())
            }
        }
        while(left.length){result.push(left.shift())}
        while(right.length){result.push(right.shift())}
        return result
    }

console.log(mergeSort([5,3,7,9,8,3]))
// http://jsbin.com/tonaguvihu/1/edit?js,console
    
      return{
          merge,
          mergeSort};
      
    }());
    