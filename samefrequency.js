/**
 * problem:
 * write a function to check the two numbers have same frequency.
 * same frequncy: means we have equal digits order or digits does not
 * matter.
 * 
 * input: two numbers
 * output: true/false (is same frequency or not)
 * 
 * examples:
 * 182, 812 => true
 * 34, 14 => false
 * 342456, 453624 => true
 * 22, 222 => false
 * 
 * 
 */


/**
 * solution:
  write a function isSameFrequency( 182, 812) accepting two parameter of numbers
  take the first value and loop through its values and keep the counter
  in an object like
  {
    1: 1,
    8: 1,
    2: 1
  }
  now iterate through second value and check if its counter is > 0
  remove it from counter.
  if counter is 0 or not exists then return false its not same frequency.
 */

  function isSameFrequency(first, second){
    const counterObj = {}
    let isSameFrequency = true

    first.toString().split('').forEach(element => {
        counterObj[element]? counterObj[element] = counterObj[element]+1 : counterObj[element] = 1     

    });

    second.toString().split('').forEach(element => {
        if(!counterObj[element] || counterObj[element] === 0){
            isSameFrequency = false 
        }else{
            counterObj[element]--
        }
    });

    return isSameFrequency
  }

  let result = isSameFrequency (182, 812)
  console.log('result: ', result)