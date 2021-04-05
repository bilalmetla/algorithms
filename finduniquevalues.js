
/**
 * problem:
 * find unique values from a list. it can be anumber/string list.
 * like we have an array [2,3,4,4,2,5,6] the unique values are 5
 * similar like [1] unique values are 1
 * [1,2,3,4,5,6,7] unique vlaues are 7
 * 
 * inputs:
 * an array of sting or number
 *  output: a number
 * [1] => 1
 *
 * 
 * [1,2] => 2
 * [1,2,3,4,5,6,7,8] => 8
 * [3,4,3,5,5,5,3,3,3,] => 3
 * [] => 0
 * 
 * any condition/rule ?
 * 
 */


/**
 * solution:
 */


function uniqueValues(values){
    const counterObj = {}
    let uniqueValues = 0

    values.forEach(element => {
        if(!counterObj[element]){
            counterObj[element] = 1
            uniqueValues++
        }else{
            counterObj[element]++
        }
        
    });
    return uniqueValues
}
let uniqueValue = uniqueValues([2,3,4,2,3])
console.log(`unique values: ${uniqueValue}`)
//write a function which accept a list of elements string/number
//set a counter value which will count the unique values.
//loop through each element of array and keep there counter
//in an object form like 
/**
 * [2,3,4,2,3] => 3
 * {
 * 2: 2,
 * 3: 2,
 * 4:1
 * }
 * now total keys are 3 so we have unique elements are 3
 * 
 */