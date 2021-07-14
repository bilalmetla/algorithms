
/**
 * problem:
 * find if there is any duplicate in the number of arugments.
 * like 1,2,3 => false
 * inputs: number of arguments
 * output: true/false
 * 
 * solution:
 write a function isDuplicateThere (), accepts number of arguments.
 get the arguments as an array.
 prepare a structure/object  = {}
 loop through each argument and check if it's exists into above structure or not
 if exists then it's duplicate and return false
 else keep this number into structure with value of 1
 at the end of loop return true
  
 */

 function areThereDuplicates (){
     const countDuplicate = {}

     for(let i= 0; i < arguments.length; i++){
         if(countDuplicate[arguments[i]]){
             return true
         }else {
             countDuplicate[arguments[i]] = 1
         }
     }

     return false
 }

 console.log('areThereDuplicates: ', areThereDuplicates(1,2,3))