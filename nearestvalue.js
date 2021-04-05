/**
 * problem:
 * find the nearest value of the given number
 * we have two input values
 * 1 an array
 * 2 a number
 * for example: we have a list 4,7,10,11,12
 * and a number 9
 * so which value is nearest one = 10
 * 
 * conditions/rules
 * if two numbers at same distance then choose smallest one. like 7,8,10,11,  of 9 the result will be 8
 * 
 * sample examples
 * 1 inputs: [4,7,10,11,12], 9
 *  output: 10
 * 2 inputs: [2,8,6,3,4,3], 3
 *  out put: 3
 * 
 * calculate th nearest number formula
 * 4/3 = 1.33
 * 3/3 = 1
 * 2/3 = 0.666
 * 
 * we will loop through the list of elements and divide it by given number.
 * keep the result into a variable like nearestNumber and nearestNumberDivisionValue
 * if the second number devision result is === 1 then return that nearest number.
 * if second number devision result is greator then the previous result
 * and less then the 1 then change to new pevious result
 * if second number devision result is greator then 1 and less then 
 * previous result then also change to previous result
 * 
 * note: handle some edge cases like, empty array and number etc.
 * 
 * 
 * finally response that number
 * 
 */
const assert= require('assert')
const {performance}  = require('perf_hooks')



function nearestValue(numberList: number[], number: number): number {
    let nearestValue = numberList[0]
    if (numberList.length === 0){
        return 
    }
    if (numberList.length === 1 && numberList[0] === number){
      return nearestValue
      
    }
    let left = 1
    let right = numberList.length-1

    while (left <= right){
        
        let aDiff = Math.abs(nearestValue - number)
        let bDiff = Math.abs(numberList[left] - number)
        let cDiff = Math.abs(numberList[right] - number)
        
       // console.log(aDiff, bDiff, cDiff)
        if(aDiff === bDiff && aDiff === cDiff){
            if(numberList[left] < number){
                nearestValue = numberList[left]
            }
        }
        if(aDiff > bDiff){
            nearestValue = numberList[left]
            aDiff = bDiff
        }
        if(aDiff > cDiff){
            nearestValue = numberList[right]
            
        }
        left++
        right--

    }
    return nearestValue
}


//console.log(findNearestValue([0,-2], -1))
// -2 -1 0 1 2

let t1 = performance.now()
assert.equal(findNearestValue([4,7,10,11,12], 9), 10, 'nearest number should be 10')
let t2 = performance.now()
console.log(`time taken: ${(t2-t1)/1000} s`);
assert.equal(findNearestValue([2,8,6,3,4,3], 3), 3, 'nearest number should be 3')
assert.equal(findNearestValue([0,-2], -1), -2, 'nearest number should be -2')

/**
 4-9 = -5
 7-9 = -2
 10-9 = 1
 11-9 = 2
 12-9 = 3
 */
