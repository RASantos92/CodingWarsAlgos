/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcdddaa";
  const expected1 = "a4b2c1d3a2";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) {
    let output = ""
    let counter = 1
    for(var i = 0; i<str.length;i++){
        output += str[i]
        if(str[i+1]){
            while(str[i] === str[i+1]){
                counter++
                i++
            }
        }
        output += counter
        counter = 1
    }
    return (output<str? output:str)
  }
  console.log(encodeStr(str1))
//   ***************************************************


/* 
  String Decode  
*/

const two_str1 = "a3b21c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    let output = "", temp = "", mult = ""
    for(var i = 0; i<str.length;i++){
        if(isNaN(str[i])) temp = str[i]
        else{
            while(!isNaN(str[i])){
                mult += str[i]
                i++
            }
            i--
            output += (temp.repeat(parseInt(mult)))
            temp = ""
            mult = ""
        }
    }
    return output
}

// console.log(decodeStr(two_str1))
