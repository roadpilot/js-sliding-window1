/*
3. Longest Substring Without Repeating Characters

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

const lengthOfLongestSubstring = function(s) {
  let currSub = [];
  let longSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const charIdx = currSub.indexOf(s[i])
    if (charIdx !== -1) {
      currSub.splice(0, charIdx + 1)
    }
    currSub.push(s[i])
    longSubLength = Math.max(longSubLength, currSub.length)
  }
  return longSubLength
}