//Write a function to check if two strings are anagrams.

function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
     