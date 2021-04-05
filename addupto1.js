const {performance}  = require('perf_hooks')

function addUpTo(n){
    let total = 0
     for (let i=0; i<=n; i++){
         total += i;
     }

     return total
}

let t1 = performance.now()
let sum = addUpTo(1000000000)
let t2 = performance.now()
console.log(`sum: ${sum} time: ${(t2-t1)/1000} s`);