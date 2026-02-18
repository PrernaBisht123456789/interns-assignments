const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function checkPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
rl.question('Enter a string : ', (userInput) => {
  // Check if the input is a palindrome
  const isPalindrome = checkPalindrome(userInput);
  
  // Display result
  if (isPalindrome) {
    console.log(`The string '${userInput}' is a palindrome.`);
  } else {
    console.log(`The string '${userInput}' is not a palindrome.`);
  }
  rl.close();
});