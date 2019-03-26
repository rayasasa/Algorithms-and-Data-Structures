// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Using every function. Problem is that it would compare twice. Comparing every single element in the array
with its mirror on the other end. i.e. check if arr[0] === arr[end] and also checks arr[end] === arr[0]*/
function palindrome(str){
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1]
    });
}
//reverse the string and check if original an d reversed are the same
/* function palindrome(str) {
   let reversed_string = reverseStr(str);
   if(str == reversed_string){
       return true
   }
   else return false
}
function reverseStr(str){
    return str.split('').reverse().join('')
} */
module.exports = palindrome;
