
/**
 * problem:
 * calculate the factorial of any given number.
 factorial: is the product of all the given numbers except 0 and 1.
factorial example
0 => 0
1 => 1
2 => 2*1 => 2
3 => 3*2*1 => 6
4 => 4*3*2*1 => 24
5 => 5*4*3*2*1 => 120

samples:
input: a number
output: a number

5 => 120
8 => 40320
16 => 20922789888000

soluction:
write a function factorial() accepting a number.
loop through number down/back until reached 1 multiply each number.
like
n = 5, 4, 3, 2
factorial = 5*4 = 20, 20*3=60, 60*2=120, 120*1=120
loop
while n >= 1
factorial = factorial * --n


 */

const assert = require('assert')


function factorial(n){
    let fact = n
    while (n > 1){
        fact = fact * (--n)
    }
    return fact
}

//console.log('factorial of 5: ', factorial(5))
assert.equal(factorial(5), 120, 'factorial of 5 is 120')
assert.equal(factorial(8), 40320, 'factorial of 8 is 40320')
assert.equal(factorial(16), 20922789888000, 'factorial of 16 is 20922789888000')
assert.equal(factorial(20), 2432902008176640000, 'factorial of 20 is 2432902008176640000')

function factorialWithRecursion (n){
    //base case
    if (n === 1) return 1
    //call the same method with different input.
    return n * factorialWithRecursion(n-1)
} 
//console.log('factorialWithRecursion of 5: ', factorialWithRecursion(5))
assert.equal(factorialWithRecursion(5), 120, 'factorial of 5 is 120')
assert.equal(factorialWithRecursion(8), 40320, 'factorial of 8 is 40320')
assert.equal(factorialWithRecursion(16), 20922789888000, 'factorial of 16 is 20922789888000')
assert.equal(factorialWithRecursion(20), 2432902008176640000, 'factorial of 20 is 2432902008176640000')