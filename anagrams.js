// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* ----------ALGORITHM--------------------
   - Create two characater maps (Make sure to remove extra charcaters, spaces and conevert to lower case)
   - If the number of keys in the character maps do not match return False
   - Else 
        - Loop through each key in one map and make sure that both the maps are equal
            -if not equal return false
        - else return true   
    --Optionally use  array sort method--
*/
function anagrams(stringA, stringB) {
   const mapA = buildMap(stringA);
   const mapB = buildMap(stringB);
   
   if(Object.keys(mapA).length != Object.keys(mapB).length){
       return false;
   }
   
   else{
       for (let char in mapA){
           if(mapA[char] != mapB[char]){
               return false;
           }
       }
       return true;
   }
}

function buildMap(str){
    const map = {}
    str.replace(/[^\w]/g, '').toLowerCase();
    for(let char of str){
        if(!map[char]){
            map[char] = 1;
        }
        else{
            map[char] ++
        }       
    }
    return map;
}
/* ----------ALGORITHM--------------------
   -Clean string
   -Convert string into array
   -sort the array
   -Join to make a string again
   -Compare the string
*/

function anagrams2(stringA, stringB){
    let a = cleanString(stringA);
    let b = cleanString(stringB);  
    if( a === b)
        return true;
    else
        return false;
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
module.exports = anagrams;

