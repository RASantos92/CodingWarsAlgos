function isPalindrome(str){
    var rString = ""
    for(var i = str.length-1; i>=0;i--) rString += str[i]
    if(str === rString) return true
    return false
}
function longestPalindromicSubstring(str) {
    let longestPalindrome = str[0];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            var subStr = str.slice(i,j)
            if (subStr.length > longestPalindrome.length && isPalindrome(str.slice(i, j))) {
                longestPalindrome = subStr;
            }
        }
    }
    return longestPalindrome;
}

var test = "i like to dirve the racecar extreamly fast"
console.log(longestPalindromicSubstring(test))