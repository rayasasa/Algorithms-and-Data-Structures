// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    debugger;
    let my_hash_map = {};
    str.split('');
    for (var s of str){
        if (!my_hash_map[s])
            my_hash_map[s] = 1;
        else
            my_hash_map[s]++;
    } 
    let max = 0;
    let max_char = ''
    for (var temp in my_hash_map){
        if (my_hash_map[temp] > max){
            max = my_hash_map[temp];
            max_char = temp;
        }
    }
    return max_char
}

module.exports = maxChar;
