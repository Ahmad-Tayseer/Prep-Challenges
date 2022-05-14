'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//


const recursionPattern = (int1, int2) => {
    // write your code here
    let arr = [];
    let int = int1 - int2;
    arr.push(int1);
    arr.push(int);
    while (int >= 0) {
        int = int - int2;
        arr.push(int);
        recursionPattern(int, int2);
    }
    while (int != int1) {
        int = int + int2;
        arr.push(int); 
    }
    return arr;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    let linkStr = '';
    let string = str.split("");
    let firstIndex = string.indexOf('w');
    let lastIndex = string.lastIndexOf('"');
    if (firstIndex != 0) {
        for (let i = firstIndex; i <= lastIndex - 1; i++) {
            linkStr = linkStr + string[i];
        }
    }
    return linkStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    let replaced = str.replace(/[^a-z]/gi, '');
    let replacedStr = replaced.toLowerCase();
    let replacedStrLength = replacedStr.length;
    let stringHalf1 = "";
    let stringHalf2 = "";
    let result = true;
    if (replacedStrLength % 2 == 0) {
        let length = replacedStrLength / 2;
        stringHalf1 = replacedStr.slice(0,length);
        stringHalf2 = replacedStr.slice(length,replacedStrLength);

    } else { 
        let length = (replacedStrLength - 1) / 2;
        stringHalf1 = replacedStr.slice(0,length);
        stringHalf2 = replacedStr.slice(length + 1, replacedStrLength);
    }
    // stringHalf2 = stringHalf2.split('').reverse().join('');
    // stringHalf2 = stringHalf2.reverse();
    // stringHalf2 = stringHalf2.join('');
    if (stringHalf1 == stringHalf2.split('').reverse().join('')) {
        result = true;
    } else {
        result = false;
    }
    return result;
    
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };