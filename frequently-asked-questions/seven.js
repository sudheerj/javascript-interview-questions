//Write a function to count the number of vowels in a string.

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
     