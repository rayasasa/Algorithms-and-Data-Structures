// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*----------- ALGORITHM ------------------
1. Iteration
2. Recursion
*/
/* function steps(n) {
    if(n > 0){
      for(var i = 0; i < n; i++){
        let stair = "";
        for(var j = 0; j < n; j++){
          if(j <= i){
            stair += "#";
          }
          else
            stair += " ";
        }
        console.log(stair);
      }
    }
}
 */
function steps(n, row = 0, stair = ''){
    if(n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    //const add = stair.length <= row ? '#' : ' ';
    if(stair.length <= row){
        stair += '#';
    }
    else{
        stair += ' ';
    } 
    steps(n, row, stair);
}
module.exports = steps;
