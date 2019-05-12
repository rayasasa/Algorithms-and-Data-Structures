// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/* ----------ALGORITHM--------------------
   - Create a new array called chunk
   - For each element in the original array
        - Get the last element from chunked
        - If last element does not exist or if lenght of last = size 
            - push element into chunked
        - else add element to last 
    
    --Optionally use  array slice method--
*/ 
function chunk(array, size) {
    let chunked = [];
    for(let element of array){  
       const last = chunked[chunked.length -1];
       if(!last || last.length === size){
           chunked.push([element])
       }
       else{
           last.push(element)
       }
   }
   return chunked;
}
//using array slice
/* function chunk(array, size) {
    const chunked = [];
    let index = 0;
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index = index + size;
    }
  
    return chunked;
  } */
module.exports = chunk;