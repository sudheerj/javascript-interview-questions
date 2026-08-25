//Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
     