function isPalindrome(word) {
  // Write your algorithm here
  const str = word.toLowerCase()
  const length = str.length
  for (let i = 0; i < length/2; i ++) {
    if (str[i] !== str[length -1 - i]) {
      return false
    }
  }return true;

}

/* 
  Add your pseudocode here
  put code in lower case
  get string length
  create for loop ++ counter for each letter over 2
  if condition if letter in possition i != -i, return false else return true
*/

/*
  Add written explanation of your solution here
  After putting all letters in the same case, We create a for loop where the counter
  represents the possition of the letter.We then check if the position of the letter mathes the letter in its mirrored possition
  IF yes, return true if not, return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
