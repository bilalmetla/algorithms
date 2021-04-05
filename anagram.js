/**
 * problem:
 * given two strings,  write a function to determine if the second string is
 * an anagram of first.
 * anagram is a word, phrase or name formed by rearranging the letters of
 * another word. 
 * 
 */
/**
 * understand the problem
 * we have two strings, find if the second strign is an 
 * anagram of first string.
 * anagram: two stings has same characters. 
 * 
 * inputs: two strings
 * output: true/false
 * 
 * examples:
 * 1: inputs: cinema, iceman
 *    output: true
 * 2: inputs: '', ''
 *    outputs: true
 * 3: inputs: hello, world
 *    outputs: false
 * 4: inputs: car, rat
 *    outputs: false
 */

/**
 * solve/break down it
 */

const assert = require('assert')

//handle some edge cases like empty strings or different length of strings etc

//check if it's each character exists into second string.
// order of character does not matter but frequency matters. 
//if any of a character does not match then return false else return true
 //return true/false based on values are anagram

function isAnagram (value, anagram) {   
    let isAnagram = true
    if(value.length !== anagram.length){
        isAnagram = false
        return isAnagram
    }
    anagram = anagram.split('')
    for (let v of value) {
        let currentIndex = anagram.indexOf(v)
        if(currentIndex === -1){
            isAnagram = false
            break;
        }else {
            anagram.splice(currentIndex, 1)
        }
    }
   
    return isAnagram
}


// testing few scenarios
assert.equal(isAnagram('cinema', 'iceman'), true, 'response should be true')
assert.equal(isAnagram('hello', 'world'), false, 'response should be false')
assert.equal(isAnagram('', ''), true, 'response should be true')
assert.equal(isAnagram('', 'well'), false, 'response should be false')
assert.equal(isAnagram('well', ''), false, 'response should be false')


/**
 * improved version
 * 
 * loop through  first value and prepare an object with each character
 * count.
 * like 
obj = {
    i:3,
    f:2,
    r:1        
}
* now loop thourg the second string/value and check if it exists into object
* decriment the counter of character in the object until its 0
if some character count is 0 then its not anagram
return true/false
 */

function isAnangramImproved (first, second){
    if(first.length === 0 && second.length === 0){
        return true
    }
    if(first.length === 0 || second.length === 0){
        return false
    }
    const charactersCount = {}
    let isAnagram = true
    first.split('').forEach(ch => charactersCount[ch] = charactersCount[ch]+1 || 1 );
    console.log(charactersCount)
    second.split('').forEach(ch => {
        if(charactersCount[ch] === 0 || !charactersCount[ch]){
            isAnagram = false
            
        }
        if(charactersCount[ch] > 0){
            charactersCount[ch]--
        }
    })

    return isAnagram
}

/**
 * dry run
inputs: cinema, iceman
output: true
run:
characterCount = {
    c:0,
    i:0,
    n:0,
    e:0,
    m:0,
    a:0 
} 
isAnagram: true
first loop on cinema => ...
second loop on iceman => ...
isAnagram: true

 */

assert.equal(isAnangramImproved('cinema', 'iceman'), true, 'response should be true')
assert.equal(isAnangramImproved('hello', 'world'), false, 'response should be false')
assert.equal(isAnangramImproved('', ''), true, 'response should be true')
assert.equal(isAnangramImproved('', 'well'), false, 'response should be false')
assert.equal(isAnangramImproved('well', ''), false, 'response should be false')


//now this function has time comlixity of O(n)