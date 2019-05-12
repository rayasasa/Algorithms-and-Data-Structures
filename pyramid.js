// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative Solution
function pyramid(n){
    var stepLength = 2*n - 1;
    var mid = Math.round(stepLength/2);
    for(var i = 0; i < n; i++){
        var step = init(stepLength);
        for(var j = 0; j < stepLength; j++){
          if(j == mid-1)
            step[j] = '#';
          if(i != 0)
            step.fill('#',mid-i-1, mid+i)
        }
        console.log(step.join(''));
    }
}
function init(n){
  var temp = new Array(n);
  temp.fill(' ');
  return temp
}
// Recursion Solution
/* function pyramid(n, row = 0, step = ''){
    if(row === n){
        return;
    }
    if(step.length === n+3){
        console.log(step);
        return pyramid(n, row+1)
    }

    if(step.length < (n+3-row)/2 || step.length > (n+3-row)/2)
        step += ' '
    else
        step += '#'
    return pyramid(n, row, step)
    
} */
module.exports = pyramid;
