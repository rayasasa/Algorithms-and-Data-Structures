// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*function reverse(str){
    str.split('').reduce();

}*/

/*function reverse(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    return reversed;
}*/
//using for loop
function reverse(str) {
    let len = str.length;
    let reversed = '';
    for (i = len; i >=0; i-- ){
       reversed = reversed + str.charAt(i); 
    }
    return reversed;
}
module.exports = reverse;

//using reverse
/*function reverse(str){
    return str.split('').reverse().join('');
}
*/
